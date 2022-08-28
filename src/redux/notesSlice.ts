import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  NotesState as NotesStateInterface,
  Note as NoteInterface,
} from '../types'

const initialState: NotesStateInterface = {
  notes: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteInterface>) => {
      state.notes.push(action.payload)
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    },
    editNote: (state, action: PayloadAction<NoteInterface>) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) note = action.payload

        return note
      })
    },
  },
})
export const { addNote, removeNote, editNote } = notesSlice.actions

export default notesSlice.reducer
