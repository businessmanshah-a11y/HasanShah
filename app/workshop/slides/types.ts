export type SlideType = 'title' | 'content' | 'code' | 'summary'

export interface TitleSlideData {
  type: 'title'
  number: number
  title: string
  titleAccent: string   // the gold-colored part of the title
  subtitle: string
  author: string
  kicker: string
}

export interface ContentSlideData {
  type: 'content'
  number: number
  title: string
  bullets: string[]
}

export interface CodeSlideData {
  type: 'code'
  number: number
  title: string
  bullets: string[]     // left panel text points
  code: string          // the code to typewrite (plain text, pre-formatted)
}

export interface SummarySlideData {
  type: 'summary'
  number: number
  title: string
  steps: string[]       // exactly 6 items
  url: string
  closing: string
}

export type SlideData =
  | TitleSlideData
  | ContentSlideData
  | CodeSlideData
  | SummarySlideData
