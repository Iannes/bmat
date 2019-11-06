import React from "react"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import TriggerDialog from "../../Select/TriggerDialog"
import { useStyles } from "./Styles"

export const SearchInput = ({
  inputVal,
  handleChange,
  handleKeyPress,
  handleSearch
}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <TriggerDialog />
      <InputBase
        className={classes.input}
        placeholder="Search Artists"
        inputProps={{
          "aria-label": "search by artist name",
          value: inputVal,
          onChange: handleChange,
          onKeyPress: handleKeyPress
        }}
      />
      <IconButton
        onClick={handleSearch}
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
