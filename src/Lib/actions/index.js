export const setTitle = value => {
  return {
    type: "SET_TITLE",
    payload: { title: value }
  }
}

export const toggleDialog = () => {
  return {
    type: "TOGGLE_DIALOG"
  }
}
export const getResults = results => {
  return {
    type: "GET_RESULTS",
    payload: { searchResults: [...results], matchFound: results }
  }
}
export const openAddForm = boolean => {
  return {
    type: "OPEN_ADD_FORM",
    payload: { isAddFormOpen: boolean }
  }
}
export const submitForm = (formData = []) => {
  return {
    type: "SUBMIT_FORM",
    payload: { formData }
  }
}
