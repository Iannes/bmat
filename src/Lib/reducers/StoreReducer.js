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
        searchResults: [...action.payload.searchResults]
      }
    }
    case "SET_TITLE": {
      console.log("SET_TITLE", action.payload)
      return {
        ...state,
        chosenTitle: action.payload.title
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default reducer
