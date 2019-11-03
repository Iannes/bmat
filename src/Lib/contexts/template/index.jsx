import React from "react"
import reducer from "../../reducers/template"

const TemplateStateContext = React.createContext()
const TemplateDispatchContext = React.createContext()

const TemplateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 })
  return (
    <TemplateStateContext.Provider value={state}>
      <TemplateDispatchContext.Provider value={dispatch}>
        {children}
      </TemplateDispatchContext.Provider>
    </TemplateStateContext.Provider>
  )
}

const useTemplateState = () => {
  const context = React.useContext(TemplateStateContext)
  if (context === undefined) {
    throw new Error("useTemplateState must be used within a TemplateProvider")
  }
  return context
}

const useTemplateDispatch = () => {
  const context = React.useContext(TemplateDispatchContext)
  if (context === undefined) {
    throw new Error(
      "useTemplateDispatch must be used within a TemplateProvider"
    )
  }
  return context
}

export { TemplateProvider, useTemplateState, useTemplateDispatch }
