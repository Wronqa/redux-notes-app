export enum Language {
  PL = 'PL',
  ENG = 'ENG',
}
export enum Theme {
  DARK = 'Dark',
  LIGHT = 'Light',
}
export enum Categories {
  ALL = 'All',
  PERSONAL = 'Personal',
  BUSINESS = 'Business',
  PROJECT = 'Project',
}
export interface Note {
  id: number
  date: Date
  title: string
  desc: string
  category: Categories
  isFavourite: boolean
  project?: string
}

export interface NotesState {
  notes: Note[]
}

export interface SettingsState {
  language: Language
  theme: Theme
}
