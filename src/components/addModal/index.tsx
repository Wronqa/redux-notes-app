import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Container, Modal, Wrapper, Top, Title } from './style'
import { Form } from '../form'
import { NotesState, TempNote } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../../redux/notesSlice'

interface PropsInterface {
  close: Function
  visibility: boolean
}
export const AddModal = ({ close, visibility }: PropsInterface) => {
  ///Wez to typie sprawdz
  const count = useSelector((state: NotesState) => state.data)

  const dispatch = useDispatch()
  const addNoteHandler = (note: TempNote) => {
    dispatch(addNote(note))
  }

  if (!visibility) return null
  return (
    <Container>
      <Modal>
        <Wrapper>
          <Top>
            <Title>Add notes</Title>
            <CloseIcon onClick={() => close(false)} />
          </Top>
          <Form addNote={addNoteHandler} />
        </Wrapper>
      </Modal>
    </Container>
  )
}
