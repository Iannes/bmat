import React from "react"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Checkbox from "@material-ui/core/Checkbox"

export const Head = ({
  classes,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  data = []
}) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all" }}
          />
        </TableCell>
        {data.map(headCell => (
          <TableCell
            key={headCell.isrc}
            align="left"
            padding="default"
            sortDirection={orderBy === headCell.isrc ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.isrc}
              direction={order}
              onClick={createSortHandler(headCell.isrc)}
            >
              {headCell.label}
              {orderBy === headCell.isrc ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
