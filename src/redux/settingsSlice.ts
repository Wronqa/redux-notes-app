import { RootState } from './store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Language,
  SettingsState as SettingsStateInterface,
  Theme,
} from '../types'

const initialState: SettingsStateInterface = {
  language: Language.PL,
  theme: Theme.LIGHT,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload
    },
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
  },
})

export const { changeLanguage, changeTheme } = settingsSlice.actions

export default settingsSlice.reducer
