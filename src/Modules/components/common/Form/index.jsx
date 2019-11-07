import React from "react"
import { Form } from "./Form"
import { useStoreState, useStoreDispatch } from "../../../../Lib/contexts/Store"
import { openAddForm, submitForm } from "../../../../Lib/actions"

const FormContainer = () => {
  const [formValues, setFormValues] = React.useState([])
  const state = useStoreState()
  const dispatch = useStoreDispatch()
  const [open, setOpen] = React.useState(false)

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  // each render set the form's open state
  React.useEffect(() => {
    setOpen(state.isAddFormOpen)
  }, [state.isAddFormOpen])

  const handleToggleForm = () => {
    dispatch(openAddForm(!state.isAddFormOpen))
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (formValues.length === 0) return
    // Set to global state
    dispatch(submitForm(formValues))
    handleToggleForm()
  }

  return (
    <Form
      open={open}
      handleToggleForm={handleToggleForm}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default FormContainer
