import React from "react"
import Paper from "@material-ui/core/Paper"
import { useStyles } from "./Styles"

export default function List({ rows = [] }) {
  const classes = useStyles()

  return (
    <>
      {rows.map(row => {
        return (
          row.title && (
            <section className={classes.root}>
              <Paper className={classes.paper}>
                <article row={row} key={`${row.isrc}${row.title}`}>
                  <b>{row.artist}</b>-{row.title}
                </article>
              </Paper>
            </section>
          )
        )
      })}
    </>
  )
}
