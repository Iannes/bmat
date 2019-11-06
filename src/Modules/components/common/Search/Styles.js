import { makeStyles } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

export const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  addButton: {
    padding: 0,
    margin: 0,
    background: "transparent",
    border: "none"
  },
  divider: {
    height: 28,
    margin: 4
  },
  root: {
    "& > span": {
      margin: theme.spacing(2)
    }
  },
  iconHover: {
    "&:hover": {
      color: red[800]
    }
  }
}))
