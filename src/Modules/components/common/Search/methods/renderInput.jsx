import React from "react"
import TextField from "@material-ui/core/TextField"

export const renderInput = inputProps => {
  const { InputProps, classes, ref, ...other } = inputProps
  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      {...other}
    />
  )
}
