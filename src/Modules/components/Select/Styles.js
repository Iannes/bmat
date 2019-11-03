import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: "auto",
    position: "absolute",
    top: 0,
    height: "100%",
    bottom: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))
