import React from "react"
import { SearchInput } from "./SearchInput"
import { useStoreState, useStoreDispatch } from "../../../../Lib/contexts/Store"
import { filterData } from "../../../helpers/filterData"
import { getResults, openAddForm } from "../../../../Lib/actions"

const SearchContainer = () => {
  const state = useStoreState()
  const dispatch = useStoreDispatch()
  const [inputVal, setInputVal] = React.useState("")
  const results = filterData(inputVal, state.data, "artist")

  const handleFormOpen = () => {
    dispatch(openAddForm(!state.isAddFormOpen))
  }

  const handleSearch = () => {
    setInputVal("")
    dispatch(getResults(results))
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }
  const handleChange = e => {
    setInputVal(e.target.value)
  }

  return (
    <SearchInput
      inputVal={inputVal}
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
      handleSearch={handleSearch}
      handleFormOpen={handleFormOpen}
    />
  )
}

export default SearchContainer
