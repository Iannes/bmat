import React from "react"
import reducer from "../reducers/StoreReducer"

const StoreStateContext = React.createContext({})
const StoreDispatchContext = React.createContext({})

const initialState = {
  data: [],
  metadata: []
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  )
}

const useStoreState = () => {
  const context = React.useContext(StoreStateContext)
  if (context === undefined) {
    throw new Error("useStoreState must be used within a StoreProvider")
  }
  return context
}

const useStoreDispatch = () => {
  const context = React.useContext(StoreDispatchContext)
  if (context === undefined) {
    throw new Error("useStoreDispatch must be used within a StoreProvider")
  }
  return context
}

export { StoreProvider, useStoreState, useStoreDispatch }
