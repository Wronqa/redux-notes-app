import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled(SearchIcon)`
  color: black;
  font-size: 1.8rem !important;
`
const Input = styled.input`
  margin-left: 5px;
  padding: 10px;
  border: none;
  width: 50%;
  background: transparent;
`

export const Search = () => {
  return (
    <Container>
      <Icon />
      <Input type='text' placeholder='Search' />
    </Container>
  )
}
