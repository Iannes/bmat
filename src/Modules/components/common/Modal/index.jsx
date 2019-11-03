import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Options from "./Options"
import { useStoreState, useStoreDispatch } from "../../../../Lib/contexts/Store"
import { useStyles } from "../../Select/Styles"

export default function DialogSelect({ data = [] }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const state = useStoreState()
  const dispatch = useStoreDispatch()

  React.useEffect(() => {
    console.log(state)
    setOpen(state.isDialogOpen)
  }, [state, state.isDialogOpen])

  const handleChange = event => {
    dispatch({
      type: "SET_TITLE",
      payload: { title: event.target.value }
    })
  }

  const handleClose = () => {
    dispatch({
      type: "TOGGLE_DIALOG"
    })
  }

  return (
    <>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        style={{ bottom: "50%" }}
      >
        <DialogTitle>Choose Title</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Title</InputLabel>
              <Select
                native
                value={state.chosenTitle}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <Options data={data} />
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}