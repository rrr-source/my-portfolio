import type { Experience, Project, SocialLink, TechCategory } from '../types'

export const SITE_NAME = 'Roman'

// width in vw — must match each section's minWidth value
export const SECTIONS = [
  { id: 'hero',       label: 'Home',       width: 100 },
  { id: 'about',      label: 'About',      width: 150 },
  { id: 'experience', label: 'Experience', width: 250 },
  { id: 'techstack',  label: 'Tech Stack', width: 120 },
  { id: 'projects',   label: 'Projects',   width: 400 },
  { id: 'contact',    label: 'Contact',    width: 100 },
] as const

export const NAV_LINKS = SECTIONS.filter((s) => s.id !== 'hero').map((s) => ({
  label: s.label,
  href: `#${s.id}`,
}))

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub',   href: 'https://github.com/romangolovlyov',             icon: 'github'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/romangolovlyov',         icon: 'linkedin' },
  { label: 'Email',    href: 'mailto:roman@example.com',                       icon: 'mail'     },
  { label: 'Telegram', href: 'https://t.me/romangolovlyov',                    icon: 'telegram' },
]

export interface ContactLink {
  abbr:  string
  label: string
  value: string
  href:  string
}

export const CONTACT_LINKS: ContactLink[] = [
  { abbr: '✉',  label: 'Email',    value: 'roman@example.com',                href: 'mailto:roman@example.com'                     },
  { abbr: 'GH', label: 'GitHub',   value: 'github.com/romangolovlyov',        href: 'https://github.com/romangolovlyov'            },
  { abbr: 'TG', label: 'Telegram', value: '@romangolovlyov',                  href: 'https://t.me/romangolovlyov'                  },
  { abbr: 'LI', label: 'LinkedIn', value: 'linkedin.com/in/romangolovlyov',   href: 'https://linkedin.com/in/romangolovlyov'       },
]

export const TECH_STACK: TechCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'GSAP' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
      { name: 'Prisma' },
      { name: 'Redis' },
    ],
  },
  {
    category: 'Tooling',
    items: [
      { name: 'Vite' },
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Figma' },
      { name: 'Vercel' },
    ],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'AI Signals',
    role: 'Senior Frontend Engineer',
    period: '2024 — Present',
    description:
      'Built real-time trading dashboard with live market data feeds and WebSocket integration.',
    achievements: [
      'Built real-time trading dashboard with live market data feeds',
      'WebSocket integration for sub-100ms data updates',
      'Achieved 40% performance gain via code splitting & lazy loading',
    ],
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'WebSockets', 'GSAP'],
  },
  {
    company: 'Blockchain Central',
    role: 'Senior Web3 Frontend Engineer',
    period: '2023 — 2024',
    description:
      'Led multi-chain wallet integration and shipped NFT marketplace and DeFi dashboard products.',
    achievements: [
      'Multi-chain wallet integration across 8+ EVM networks',
      'NFT marketplace with lazy minting & batch transfers',
      'DeFi dashboard with live on-chain position tracking',
    ],
    tags: ['React', 'Wagmi', 'Ethers.js', 'WalletConnect'],
  },
  {
    company: 'Agineer AI',
    role: 'Lead Frontend Engineer',
    period: '2022 — 2023',
    description:
      'Led a team of four to architect and ship a SaaS AI platform from the ground up.',
    achievements: [
      'Led team of 4 engineers across two product streams',
      'Architected SaaS platform from scratch — 0 to production',
      'Set up CI/CD pipelines reducing deploy time by 60%',
    ],
    tags: ['Nuxt 3', 'Vue 3', 'GraphQL', 'TailwindCSS'],
  },
  {
    company: 'Overnight Finance',
    role: 'Web3 Frontend Engineer',
    period: '2021 — 2022',
    description:
      'Built staking platform, presale UI and smart contract integrations for DeFi protocol.',
    achievements: [
      'Staking platform handling $2M+ in locked TVL',
      'Presale UI with whitelist, vesting & claim flows',
      'Smart contract integration via Ethers.js & Web3.js',
    ],
    tags: ['React', 'Web3.js', 'Ethers.js', 'SCSS'],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'AI Signals Trading Platform',
    description:
      'Real-time trading dashboard with live candlestick charts, WebSocket signal alerts, and sub-100ms feed updates. Built for professional traders managing multi-asset portfolios.',
    tags: ['Vue 3', 'WebSockets', 'GSAP', 'Pinia'],
    accent: '#00ff88',
    href: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'BDIC Presale Platform',
    description:
      'Web3 token presale with multi-wallet connect, tier-based allocation system and on-chain vesting. Raised $2M+ across three presale rounds with zero contract exploits.',
    tags: ['React', 'Wagmi', 'Ethers.js', 'TypeScript'],
    accent: '#4f46e5',
    href: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'Web3 Staking Platform',
    description:
      'DeFi staking protocol UI with live APY calculator, compound rewards tracking, and multi-pool support. Handles $2M+ TVL with real-time on-chain position updates.',
    tags: ['React', 'Web3.js', 'GraphQL'],
    accent: '#f97316',
    href: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'SaaS AI Platform',
    description:
      'Multi-tenant AI SaaS with workspace management, role-based access, and third-party LLM API integration. Architected from scratch and scaled to 500+ active business accounts.',
    tags: ['Nuxt 3', 'Vue 3', 'GraphQL', 'TailwindCSS'],
    accent: '#ec4899',
    href: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
]
