import { Note } from '../card'
import { useState } from 'react'
import { AddModal } from '../addModal'
import {
  Container,
  Wrapper,
  Top,
  Menu,
  MenuItem,
  AddNote,
  Icon,
  Text,
  NotesList,
} from './style'

export const Notes = () => {
  const [modalVisibility, setModalVisibility] = useState(false)

  return (
    <Container>
      <Wrapper>
        <Top>
          <Menu>
            <MenuItem>All</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Personal</MenuItem>
            <MenuItem>Business</MenuItem>
          </Menu>
          <AddNote
            onClick={() => {
              setModalVisibility(true)
            }}
          >
            <Icon />
            <Text>Add new note</Text>
          </AddNote>
        </Top>

        <NotesList>
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </NotesList>
      </Wrapper>
      {modalVisibility && (
        <AddModal
          close={() => setModalVisibility(false)}
          visibility={modalVisibility}
        />
      )}
      {/* Zmien tu te gówno nazwe */}
    </Container>
  )
}
