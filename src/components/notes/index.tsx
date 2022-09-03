import { Note } from '../note'
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
import { useSelector } from 'react-redux'

export const Notes = () => {
  const [modalVisibility, setModalVisibility] = useState(false)

  const count = useSelector((state: any) => state.notes.data)

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
          {count?.map((item: any) => (
            <Note
              title={item.title}
              key={item.id}
              desc={item.desc}
              id={item.id}
            />
          ))}
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
