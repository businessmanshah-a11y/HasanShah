export type SlideType = 'title' | 'content' | 'code' | 'tools' | 'summary'

export interface TitleSlideData {
  type: 'title'
  number: number
  title: string
  titleAccent: string
  subtitle: string
  author: string
  kicker: string
}

export interface ContentSlideData {
  type: 'content'
  number: number
  title: string
  bullets: string[]
  sequential?: boolean  // each Space/Arrow reveals one more bullet
  logos?: import('../components/ToolLogos').ToolLogoName[]
}

export interface CodeSlideData {
  type: 'code'
  number: number
  title: string
  bullets: string[]
  code: string
  dir?: 'ltr' | 'rtl'
}

export interface ToolEntry {
  name: import('../components/ToolLogos').ToolLogoName
  note: string
  badge?: string
}

export interface ToolsSlideData {
  type: 'tools'
  number: number
  title: string
  tools: ToolEntry[]
}

export interface SummarySlideData {
  type: 'summary'
  number: number
  title: string
  steps: string[]
  url: string
  closing: string
}

export type SlideData =
  | TitleSlideData
  | ContentSlideData
  | CodeSlideData
  | ToolsSlideData
  | SummarySlideData
