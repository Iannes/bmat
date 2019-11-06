import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { useStoreState, useStoreDispatch } from "../../../../Lib/contexts/Store"
import { openAddForm } from "../../../../Lib/actions"

export default function FormDialog() {
  const state = useStoreState()
  const dispatch = useStoreDispatch()
  // TODO delete local state
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    console.log("hi")
    setOpen(state.isAddFormOpen)
  }, [state.isAddFormOpen])

  const handleToggleForm = () => {
    dispatch(openAddForm(!state.isAddFormOpen))
  }

  return (
    <section>
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
          <Button onClick={handleToggleForm} color="primary">
            Cancel
          </Button>
          <Button onClick={handleToggleForm} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  )
}
