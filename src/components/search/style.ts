import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled(SearchIcon)`
  color: black;
  font-size: 1.8rem !important;
`
export const Input = styled.input`
  margin-left: 5px;
  padding: 10px;
  border: none;
  width: 50%;
  background: transparent;
`
