import styled from 'styled-components'
import { Search } from './Search'

export const Navigation = () => {
  const Container = styled.div`
    height: 65px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
  `
  const Wrapper = styled.div`
    padding: 0px 40px;
    width: 100%;
  `
  const Button = styled.button``
  return (
    <Container>
      <Wrapper>
        <Search />
      </Wrapper>
    </Container>
  )
}
