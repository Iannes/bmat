import React from "react"
import TextField from "@material-ui/core/TextField"
import { useStoreState, useStoreDispatch } from "../../../../Lib/contexts/Store"
import { useStyles } from "./Styles"
import { filterData } from "../../../helpers/filterData"
import { getResults } from "../../../../Lib/actions"

export default function SearchField() {
  const state = useStoreState()
  const classes = useStyles()
  const dispatch = useStoreDispatch()
  const [inputVal, setInputVal] = React.useState("")

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      const results = filterData(inputVal, state.data, "artist")
      setInputVal("")
      dispatch(getResults(results))
    }
  }
  const handleChange = e => {
    setInputVal(e.target.value)
  }

  return (
    <article className={classes.root}>
      <TextField
        InputProps={{
          value: inputVal,
          onChange: handleChange,
          onKeyPress: handleKeyPress
        }}
      />
    </article>
  )
}
