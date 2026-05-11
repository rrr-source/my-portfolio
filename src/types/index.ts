export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface TechItem {
  name: string
  icon?: string
}

export interface TechCategory {
  category: string
  items: TechItem[]
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  tags: string[]
  url?: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  accent?: string
  image?: string
  href?: string
  github?: string
  featured?: boolean
}
