import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import {
  Container,
  Modal,
  Wrapper,
  Top,
  Title,
  Form,
  Input,
  Button,
  TextArea,
} from './style'

interface PropsInterface {
  close: Function
  visibility: boolean
}
export const AddModal = ({ close, visibility }: PropsInterface) => {
  ///Wez to typie sprawdz

  if (!visibility) return null
  return (
    <Container>
      <Modal>
        <Wrapper>
          <Top>
            <Title>Add notes</Title>
            <CloseIcon onClick={() => close(false)} />
          </Top>
          <Form>
            <Input />
            <Input />
            <Input />
            <TextArea />
            <Button>Add</Button>
          </Form>
        </Wrapper>
      </Modal>
    </Container>
  )
}
