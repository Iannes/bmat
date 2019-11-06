import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <section>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
            type="artist"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Title"
            type="title"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Duration"
            type="duration"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="ISRC"
            type="isrc"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  )
}
