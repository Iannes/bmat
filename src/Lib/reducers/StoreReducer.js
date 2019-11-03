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
        metadata: [...state.metadata, ...action.payload.metadata]
      }
    }
    case "TOGGLE_DIALOG": {
      return {
        ...state,
        isDialogOpen: !state.isDialogOpen
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
