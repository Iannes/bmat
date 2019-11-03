import React from "react"
import Typography from "@material-ui/core/Typography"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

export const Head = () => {
  const headcells = [
    { id: "empty", label: "" },
    { id: "artist", label: "Artist" },
    { id: "duration", label: "Duration" },
    { id: "isrc", label: "ISRC" },
    { id: "title", label: "Title" }
  ]

  return (
    <TableHead style={{ background: "rgba(0, 0, 0, 0.87)" }}>
      <TableRow>
        {headcells.map((headCell, i) => (
          <TableCell
            key={`${headCell.id}-${headCell.label}`}
            align={i === 0 || i === 1 ? "left" : "right"}
            padding="default"
            sortDirection={false}
          >
            <Typography style={{ color: "#fff" }} variant="h6">
              {headCell.label}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
