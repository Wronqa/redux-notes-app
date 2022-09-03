import { useFormik } from 'formik'
import { Categories, TempNote } from '../../types'
import {
  FormContainer,
  Input,
  TextArea,
  Select,
  Option,
  Label,
  FormItem,
} from './style'
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
    initialValues: { title: '', date: '', desc: '', category: 'All' },
    onSubmit: (values) => {
      const note = {
        id: htmlId,
        title: values.title,
        desc: values.desc,
        category: values.category,
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
        <FormItem>
          <Label htmlFor='title'>Title</Label>
          <Input
            id='title'
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor='desc'>Description</Label>
          <TextArea
            id='desc'
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor='category'>Description</Label>
          <Select id='category' onChange={formik.handleChange}>
            {(Object.keys(Categories) as (keyof typeof Categories)[]).map(
              (key, index) => {
                return (
                  <Option key={index} value={Categories[key]}>
                    {Categories[key]}
                  </Option>
                )
              }
            )}
          </Select>
        </FormItem>
        {formik.values.category === 'Project' && (
          <FormItem>
            <Label htmlFor='category'>Description</Label>
            <Select id='category' onChange={formik.handleChange}>
              {(Object.keys(Categories) as (keyof typeof Categories)[]).map(
                (key, index) => {
                  return (
                    <Option key={index} value={Categories[key]}>
                      {Categories[key]}
                    </Option>
                  )
                }
              )}
            </Select>
          </FormItem>
        )}

        <Input type='submit' value='ADD' />
      </FormContainer>
    </div>
  )
}
