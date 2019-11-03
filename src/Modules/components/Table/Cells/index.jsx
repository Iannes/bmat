import React from "react"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Checkbox from "@material-ui/core/Checkbox"

export const Cells = ({ row, onClick, isItemSelected, labelId }) => {
  return (
    <TableRow
      hover
      onClick={onClick}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={`${row.title}-${row.isrc}`}
      selected={isItemSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
          style={{ visibility: "hidden" }}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.artist}
      </TableCell>
      <TableCell align="right">{row.duration}</TableCell>
      <TableCell align="right">{row.isrc}</TableCell>
      <TableCell align="right">{row.title}</TableCell>
    </TableRow>
  )
}
