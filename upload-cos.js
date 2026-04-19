import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import COS from 'cos-nodejs-sdk-v5'

// 配置
const OUT_DIR = path.resolve('docs/.vitepress/dist')
const CONCURRENCY = 8 // 并发上传（核心提速）

// COS 初始化（删除了错误的加速域名，恢复默认配置）
const cos = new COS({
  SecretId: process.env.TENCENT_SECRET_ID,
  SecretKey: process.env.TENCENT_SECRET_KEY,
  Protocol: 'https:'
})

// 工具函数
const cosApi = (fn, p) => new Promise((s, f) => cos[fn](p, (e, d) => e ? f(e) : s(d)))
async function walk(dir) {
  const files = []
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    e.isDirectory() ? files.push(...await walk(p)) : files.push(p)
  }
  return files
}

// 清空旧文件
async function clearCos() {
  console.log('🧹 清空旧文件...')
  const bucket = process.env.TENCENT_COS_BUCKET
  const region = process.env.TENCENT_COS_REGION
  let marker
  while (true) {
    const data = await cosApi('getBucket', { Bucket: bucket, Region: region, Marker: marker, MaxKeys: 1000 })
    const objects = (data.Contents || []).map(i => ({ Key: i.Key }))
    if (!objects.length) break
    await cosApi('deleteMultipleObject', { Bucket: bucket, Region: region, Objects: objects })
    marker = data.NextMarker
    if (data.IsTruncated !== 'true') break
  }
}

// 并发上传（比串行快 5~8 倍）
async function uploadFiles(files) {
  const bucket = process.env.TENCENT_COS_BUCKET
  const region = process.env.TENCENT_COS_REGION
  const queue = [...files]
  console.log(`🚀 并发上传 ${files.length} 个文件`)

  async function worker() {
    while (queue.length) {
      const file = queue.shift()
      const key = path.relative(OUT_DIR, file).replace(/\\/g, '/')
      await cosApi('putObject', {
        Bucket: bucket, Region: region, Key: key, Body: await fs.readFile(file)
      })
      console.log('✅ ' + key)
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker))
}

// 主执行
async function main() {
  await clearCos()
  const files = await walk(OUT_DIR)
  await uploadFiles(files)
  console.log('🎉 部署完成！')
}

main().catch(e => { console.error('❌ 失败', e); process.exit(1) })