import React from "react"
import "./Spinner.css"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}))

const Spinner = () => {
  const classes = useStyles()
  return (
    <section className="loader-container">
      <CircularProgress className={classes.progress} />
    </section>
  )
}

export default Spinner
