type SinglePage = {
  name: string
  path?: string
  slug: string
  clickable?: true
  description: string
}

type ParentPage = {
  name: string
  path?: string
  slug: string
  description: string
  clickable?: false
  subpages: Page[]
}

export type Page = SinglePage | ParentPage
