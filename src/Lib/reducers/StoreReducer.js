const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return {
        ...state,
        data: [...state.data, ...action.payload.data]
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
    case "TOGGLE_SEARCH": {
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen
      }
    }
    case "SET_TITLE": {
      console.log(action.payload)
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
