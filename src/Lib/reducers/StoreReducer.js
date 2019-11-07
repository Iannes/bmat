const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        searchResults: []
      }
    }
    case "FETCH_META_DATA": {
      return {
        ...state,
        metaData: [...state.metaData, ...action.payload.metaData]
      }
    }
    case "TOGGLE_DIALOG": {
      return {
        ...state,
        isDialogOpen: !state.isDialogOpen
      }
    }
    case "GET_RESULTS": {
      return {
        ...state,
        searchResults: [...action.payload.searchResults],
        matchFound: action.payload.matchFound
      }
    }
    case "SET_TITLE": {
      return {
        ...state,
        chosenTitle: action.payload.title
      }
    }
    case "OPEN_ADD_FORM": {
      return {
        ...state,
        isAddFormOpen: action.payload.isAddFormOpen
      }
    }
    case "SUBMIT_FORM": {
      return {
        ...state,
        data: [...state.data, action.payload.formData]
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default reducer
