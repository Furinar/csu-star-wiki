<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://img.cdn1.vip/i/69da3249c4d89_1775907401.webp',
    name: 'Furina',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Furinar' },
      { icon: 'twitter', link: 'https://github.com/Furinar' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members />