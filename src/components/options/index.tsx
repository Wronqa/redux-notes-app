import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { NotesState } from '../../types'
import { Container, OptionItem } from './style'
import { useDispatch } from 'react-redux'
import { removeNote } from '../../redux/notesSlice'
import { AddModal } from '../addModal'

interface PropsInterface {
  show: boolean
  setShow: (state: boolean) => void
  id: string
  setEditShow: (state: boolean) => void
}

export const Options = ({
  show,
  setShow,
  id,

  setEditShow,
}: PropsInterface) => {
  const ref: any = useRef(null)

  const notes = useSelector((state: NotesState) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  const deleteHandler = () => {
    dispatch(removeNote(id))
  }
  const editHandler = () => {
    setEditShow(true)
  }

  if (!show) return null
  return (
    <Container ref={ref}>
      <OptionItem onClick={deleteHandler}>Delete</OptionItem>
      <OptionItem onClick={editHandler}>Edit</OptionItem>
    </Container>
  )
}
