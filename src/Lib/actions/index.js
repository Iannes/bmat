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
    payload: { searchResults: [...results] }
  }
}
