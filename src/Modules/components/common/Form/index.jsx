import React from "react"
import { Form } from "./Form"
import { useStoreState, useStoreDispatch } from "../../../../Lib/contexts/Store"
import { openAddForm } from "../../../../Lib/actions"

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

  React.useEffect(() => {
    setOpen(state.isAddFormOpen)
  }, [state.isAddFormOpen])

  const handleToggleForm = () => {
    dispatch(openAddForm(!state.isAddFormOpen))
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (formValues.length === 0) return
    console.log("values", formValues)
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
