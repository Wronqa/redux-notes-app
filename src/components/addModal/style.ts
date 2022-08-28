import styled from 'styled-components'

export const Container = styled.div`
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
export const Modal = styled.div`
  background-color: Ivory;
  border-radius: 5px;
  width: 30%;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`
export const Title = styled.h1`
  color: black;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Input = styled.input`
  padding: 10px;
`
export const TextArea = styled.textarea``

export const Button = styled.div`
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
