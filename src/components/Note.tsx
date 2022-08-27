import styled from 'styled-components'

export const Note = () => {
  const Container = styled.div`
    width: 23%;
    min-width: 220px;
    ///height: 20%;
    min-height: 200px;
    background-color: white;
  `
  const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
  `
  const Date = styled.p`
    font-weight: 400;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.623);
  `
  const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 10px;
  `
  const Desc = styled.p`
    font-size: 0.9rem;
    font-weight: 300;
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.723);
  `
  return (
    <Container>
      <Wrapper>
        <Date>27 June 2022 18:32</Date>
        <Title>Testowa notatka</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat modi
          a iure illum quas deleniti hic quidem dicta error deserunt ducimus
          fuga quo aliquam qui perspiciatis ipsum.
        </Desc>
      </Wrapper>
    </Container>
  )
}
