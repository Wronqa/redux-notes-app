import styled from 'styled-components'
import { Note } from './Note'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { useState } from 'react'
import { AddModal } from './AddModal'

export const Notes = () => {
  const [modalVisibility, setModalVisibility] = useState(false)

  const Container = styled.div`
    overflow: auto;
    height: 100%;
    width: 100%;
    background-color: #d9e2ef;
  `
  const Wrapper = styled.div`
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 15px;
  `
  const MenuItem = styled.li`
    padding: 5px 10px;
    color: white;
    letter-spacing: 1px;
    font-weight: 400;
    font-weight: 300;
    font-size: 1.1rem;
    cursor: pointer;
    background-color: #0000ff90;

    &: hover {
      color: black;
    }
  `
  const AddNote = styled.div`
    display: flex;
    color: blue;
    align-items: center;
    cursor: pointer;
  `
  const Icon = styled(AddCircleOutlineRoundedIcon)``
  const Text = styled.p`
    margin-left: 5px;
  `
  const NotesList = styled.div`
    padding-top: 25px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
  `

  return (
    <Container>
      <Wrapper>
        <Top>
          <Menu>
            <MenuItem>All</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Personal</MenuItem>
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
