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
        data: [...state.metadata, ...action.payload.metadata]
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default reducer
