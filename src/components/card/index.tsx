import { Container, Wrapper, Date, Title, Desc } from './style'

export const Note = () => {
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
