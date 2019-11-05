import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import TriggerDialog from "../../../Select/TriggerDialog"
import Logo from "../../Logo"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar style={{ padding: "0 20px" }} position="static">
        <Toolbar>
          <Logo />
          <Typography variant="h6" className={classes.title}>
            BMAT
          </Typography>
          <TriggerDialog />
        </Toolbar>
      </AppBar>
    </div>
  )
}
