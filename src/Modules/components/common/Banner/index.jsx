/* eslint-disable no-dupe-keys */
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import mic from "../../../assets/cassete.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    borderRadius: 9,
    height: "400px",
    display: "flex",
    justifyContent: "space-aroud",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    margin: "auto",
    backgroundImage: `url(${mic})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundSize: "cover"
  },
  searchContainer: {
    maxWidth: "1200px",
    minWidth: "50%",
    margin: "auto"
  }
}))

export default function Banner({ children }) {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <article className={classes.searchContainer}>{children}</article>
    </section>
  )
}
