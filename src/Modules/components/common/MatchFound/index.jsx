import React from "react"
import Text from "../Text"

const MatchFound = ({ state }) => {
  return (
    <Text
      content={
        state.matchFound
          ? "No match found. Press the plus icon on your search bar to add a new title"
          : ""
      }
    />
  )
}

export default MatchFound
