import React from "react"
import Form from "../Form"
import Text from "../Text"

const MatchFound = ({ state }) => {
  return state.matchFound ? <Form /> : <Text />
}

export default MatchFound
