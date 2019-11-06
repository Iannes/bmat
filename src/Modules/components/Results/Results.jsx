import React from "react"
import Table from "../Table"
import MatchFound from "../common/MatchFound"

const Results = ({ state }) => {
  const hasResults = state.searchResults && state.searchResults.length > 0
  return (
    <>
      <Table
        style={{ visibility: hasResults ? "visible" : "hidden" }}
        rows={state.searchResults}
      />
      {!hasResults && <MatchFound state={state} />}
    </>
  )
}

export default Results
