import { TempNote } from './../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { json } from 'stream/consumers'
import {
  TempNote as TempNoteInterface,
  NotesState as NotesStateInterface,
  Note as NoteInterface,
  Note,
} from '../types'

const initialState: NotesStateInterface = {
  data:
    (JSON.parse(localStorage.getItem('notes') as string) as TempNote[]) || [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<TempNoteInterface>) => {
      state.data.push(action.payload)
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((note) => note.id !== action.payload)
    },
    editNote: (state, action: PayloadAction<TempNoteInterface>) => {
      state.data = state.data.map((note) => {
        if (note.id === action.payload.id) note = action.payload

        return note
      })
    },
  },
})
export const { addNote, removeNote, editNote } = notesSlice.actions

export default notesSlice.reducer
