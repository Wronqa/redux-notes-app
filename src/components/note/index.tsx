import { Container, Wrapper, Date, Title, Desc } from './style'

interface NoteInterface {
  title: string
  desc: string
}
export const Note = ({ title, desc }: NoteInterface) => {
  return (
    <Container>
      <Wrapper>
        <Date>27 June 2022 18:32</Date>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Wrapper>
    </Container>
  )
}
