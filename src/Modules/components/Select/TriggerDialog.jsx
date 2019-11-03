import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import FilterListIcon from "@material-ui/icons/FilterList"
import { useStoreDispatch } from "../../../Lib/contexts/Store"

const useStyles = makeStyles(() => ({
  icon: {
    flexGrow: 1,
    color: "white"
  },
  title: {
    flexGrow: 1,
    color: "white",
    marginRight: 20
  }
}))

export default function TriggerDialog() {
  const classes = useStyles()
  const dispatch = useStoreDispatch()
  const handleOpen = () => {
    dispatch({
      type: "TOGGLE_DIALOG"
    })
  }

  return (
    <Tooltip title="Select Title">
      <IconButton onClick={handleOpen} aria-label="select title">
        <FilterListIcon className={classes.icon} />
      </IconButton>
    </Tooltip>
  )
}
