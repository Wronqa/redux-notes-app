import styled from 'styled-components'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'

export const Container = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  background-color: #d9e2ef;
`
export const Wrapper = styled.div`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
`
export const MenuItem = styled.li`
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
export const AddNote = styled.div`
  display: flex;
  color: blue;
  align-items: center;
  cursor: pointer;
`
export const Icon = styled(AddCircleOutlineRoundedIcon)``
export const Text = styled.p`
  margin-left: 5px;
`
export const NotesList = styled.div`
  padding-top: 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`
