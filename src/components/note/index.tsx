import { useState } from 'react'
import {
  Container,
  Wrapper,
  Top,
  Icon,
  Date,
  Title,
  Desc,
  Category,
} from './style'
import { Options } from '../options'
import { AddModal } from '../addModal'
import { Categories } from '../../types'

interface NoteInterface {
  title: string
  desc: string
  id: string
  category: Categories
}
export const Note = ({ id, title, desc, category }: NoteInterface) => {
  const [show, setShow] = useState<boolean>(false)
  const [editShow, setEditShow] = useState<boolean>(false)

  return (
    <>
      <Container>
        <Wrapper>
          <Category>{category}</Category>
          <Top>
            <Date>27 June 2022 18:32</Date>
            <Icon onClick={() => setShow((prev) => !prev)} />
            {show && (
              <Options
                show={show}
                setShow={setShow}
                id={id}
                setEditShow={setEditShow}
              />
            )}
          </Top>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Wrapper>
      </Container>
      {editShow && <AddModal close={setEditShow} visibility={editShow} />}
    </>
  )
}
