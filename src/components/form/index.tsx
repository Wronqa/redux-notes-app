import { useFormik } from 'formik'
import { TempNote } from '../../types'
import { FormContainer, Input, TextArea, Button } from './style'
import nextId from 'react-id-generator'

interface PropsInterface {
  addNote: (note: TempNote) => void
}
interface ErrorInterface {
  title?: string
  desc?: string
}

export const Form = ({ addNote }: PropsInterface) => {
  const htmlId = nextId()

  const formik = useFormik({
    initialValues: { title: '', date: '', desc: '' },
    onSubmit: (values) => {
      const note = {
        id: htmlId,
        title: values.title,
        desc: values.desc,
        //date: new Date(),
      }
      console.log(note)
      addNote(note)
    },
    validate: (values) => {
      let errors: ErrorInterface = {}

      if (!values.title.trim()) {
        errors.title = 'Required'
      }
      if (!values.desc.trim()) {
        errors.desc = 'Required'
      }

      return errors
    },
  })

  return (
    <div>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Input
          id='title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <Input />
        <Input />
        <TextArea
          id='desc'
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
        <Input type='submit' value='ADD' />
      </FormContainer>
    </div>
  )
}
