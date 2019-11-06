import React from "react"
import Table from "../Table"

const Text = ({ content = "search" }) => {
  return <p>{content}</p>
}
const Form = () => {
  return <p>Form</p>
}
const MatchFound = ({ state }) => {
  return state.matchFound ? <Form /> : <Text />
}

const Results = ({ state }) => {
  const hasResults = state.searchResults && state.searchResults.length > 0
  return (
    <>
      {hasResults ? (
        <Table rows={state.searchResults} />
      ) : (
        <MatchFound state={state} />
      )}
    </>
  )
}

export default Results
