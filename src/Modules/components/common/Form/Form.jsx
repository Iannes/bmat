import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export const Form = ({
  open,
  handleToggleForm,
  handleChange,
  handleSubmit
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleToggleForm}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Your Song</DialogTitle>
      <DialogContent>
        <DialogContentText>
          No results found ? No problem at all, you can add your song by using
          this form.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Artist"
          type="text"
          name="artist"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          id="name"
          label="Title"
          type="text"
          name="title"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="name"
          label="Duration"
          type="text"
          name="duration"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="name"
          label="ISRC"
          type="text"
          name="isrc"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button type="button" onClick={handleToggleForm} color="primary">
          Cancel
        </Button>
        <Button type="button" onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
