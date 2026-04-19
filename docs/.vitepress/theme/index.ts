// 导入默认主题 + 自定义布局
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

// 导出自定义主题，覆盖默认布局
export default {
  DefaultTheme,
  Layout
}