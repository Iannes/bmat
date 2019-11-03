import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper"
import { Head } from "./Head"
import { Cells } from "./Cells"
import { useStyles } from "./Styles"

export default function DataTable({ rows = [] }) {
  const classes = useStyles()
  const [selected, setSelected] = React.useState([])

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (_, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }
  const isSelected = name => selected.indexOf(name) !== -1

  return (
    <section className={classes.root}>
      <Paper className={classes.paper}>
        <section className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="Metadata table"
          >
            <Head
              classes={classes}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.isrc)
                const labelId = `table-checkbox-${index}`

                return (
                  <Cells
                    row={row}
                    onClick={event => handleClick(event, row.isrc)}
                    isItemSelected={isItemSelected}
                    labelId={labelId}
                    key={`${row.isrc}${row.title}`}
                  />
                )
              })}
            </TableBody>
          </Table>
        </section>
      </Paper>
    </section>
  )
}
