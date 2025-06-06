import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '明 日 依 在',
  description:
    "嗨！我是一名热爱技术的开发者，专注于嵌入式开发。在这里，我会分享我的学习心得、项目经验，以及对技术和生活的思考。从代码优化到架构设计，从新技术探索到最佳实践分享，我希望通过文字记录成长的足迹，也希望能帮助到同样在技术路上前行的朋友们。",
  href: 'https://zcliln615.github.io',
  author: 'zcliln615',
  locale: 'zh-CN', // 中文（简体）
  location: 'China',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: '首页',
  },
  {
    href: '/projects',
    label: '项目',
  },
  {
    href: '/blog',
    label: '博客',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/zcliln615',
    label: 'GitHub',
  },
  {
    href: 'mailto:fourierlin@163.com',
    label: 'Email',
  },
  // {
  //   href: '+40 764 132 266',
  //   label: 'Phone',
  // },
  // {
  //   href: '',
  //   label: 'Instagram',
  // },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

// 支持/赞助链接配置
export const SUPPORT_LINK = {
  href: 'https://github.com/zcliln615', // 您可以替换为您的赞助链接
  label: '支持我的工作',
}

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  //Instagram: 'lucide:instagram',
  // Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  //'Web Development'?: Category[]
  'Development Tools': Category[]
  //'Hosting and Cloud Services'?: Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'AI Tools': Category[]
  'Embedded Systems': Category[]
  //'Web Servers'?: Category[]
 // Databases?: Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Development Tools': [
    { text: 'Visual Studio Code', logo: 'mdi:visual-studio-code' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'GCC', logo: 'mdi:application-brackets' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'Ubuntu', logo: 'mdi:ubuntu' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'C', logo: 'mdi:language-c' },
    { text: 'C++', logo: 'mdi:language-cpp' },
    { text: 'Python', logo: 'mdi:language-python' },
    { text: 'MATLAB', logo: 'mdi:function-variant' },
  ],
  'AI Tools': [
    { text: 'ChatGPT', logo: 'simple-icons:openai' },
    { text: 'GitHub Copilot', logo: 'simple-icons:github' },
    { text: 'Claude', logo: 'simple-icons:anthropic' },
    { text: 'TensorFlow', logo: 'simple-icons:tensorflow' },
    { text: 'PyTorch', logo: 'simple-icons:pytorch' },
  ],
  'Embedded Systems': [
    { text: 'Raspberry Pi', logo: 'simple-icons:raspberrypi' },
    { text: 'STM32', logo: 'mdi:microchip' },
    { text: 'ESP32', logo: 'mdi:wifi' },
    { text: 'Keil', logo: 'mdi:code-braces' },
  ],
  'Other Software': [
    { text: 'Discord', logo: 'mdi:discord' },
    { text: 'Visual Studio', logo: 'mdi:visual-studio' },
  ],
   // 'Web Development': [
  //   { text: 'HTML', logo: 'mdi:language-html5' },
  //   { text: 'JavaScript', logo: 'mdi:language-javascript' },
  //   { text: 'CSS', logo: 'mdi:language-css3' },
  //   { text: 'PHP', logo: 'mdi:language-php' },
  //   { text: 'Astro', logo: 'simple-icons:astro' },
  //   { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
  // ],
   // 'Web Servers': [
  //   { text: 'Apache', logo: 'cib:apache' },
  //   { text: 'Nginx', logo: 'cib:nginx' },
  // ],
  // Databases: [
  //   { text: 'MySQL', logo: 'cib:mysql' },
  //   { text: 'MongoDB', logo: 'cib:mongodb' },
  // ],
    // 'Hosting and Cloud Services': [
  //   { text: 'DigitalOcean', logo: 'mdi:digital-ocean' },
  //   { text: 'Cloudflare', logo: 'cib:cloudflare' },
  //   { text: 'Netlify', logo: 'cib:netlify' },
  // ],
}
