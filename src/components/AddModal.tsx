import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'

export const AddModal = ({
  close,
  visibility,
}: {
  close: Function
  visibility: boolean
}) => {
  ///Wez to typie sprawdz
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000081;
  `
  const Modal = styled.div`
    background-color: Ivory;
    border-radius: 5px;
    width: 30%;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
  `
  const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  `
  const Title = styled.h1`
    color: black;
  `
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
  const Input = styled.input`
    padding: 10px;
  `
  const TextArea = styled.textarea``

  const Button = styled.div`
    padding: 10px;
    background-color: blue;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `

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
