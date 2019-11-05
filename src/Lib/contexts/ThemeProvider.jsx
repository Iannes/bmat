import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

const spacing = factor => [0, 8, 16, 24, 32, 64][factor]

const theme = createMuiTheme({
  spacing,
  palette: {
    primary: {
      main: "#397f8e", // Teal
      light: "#e4f4f4", // Mint
      white: "#fff"
    },
    error: {
      main: "#ab1d00" // Error accent
    },
    grey: {
      50: "#ffffff", // White
      100: "#f5f5f5",
      200: "#ececee",
      300: "#b8b8b8",
      400: "#cdcdd2", // Grey
      500: "#dcdcdc",
      600: "#494949",
      700: "#616161",
      800: "#494949", // Body Copy
      900: "#1c1c1c", // Black
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "rgba(73, 73, 73, 0.5)" // Body Copy Secondary
    },
    divider: "#DCDCDC"
  },
  typography: {
    caption: {},
    button: {},
    overline: {}
  },
  props: {
    MuiButtonBase: {
      disableRipple: false // enable ripple, on the whole application
    }
  },
  overrides: {
    MuiListItemIcon: {
      root: { minWidth: "auto" }
    },
    MuiToolbar: {
      root: { boxSizing: "border-box" },
      dense: { minHeight: 40 }
    },
    MuiDialog: {
      paperFullWidth: {
        margin: 0,
        width: `calc(100% - ${spacing(4)}px)`,
        maxHeight: `calc(100% - ${spacing(4)}px)`,
        borderRadius: 0
      }
    },
    MuiDialogContent: { root: { padding: `${spacing(2)}px ${spacing(3)}px` } },
    MuiDialogActions: {
      root: { padding: `${spacing(1)}px ${spacing(2)}px ${spacing(2)}px` }
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 0,
        marginBottom: spacing(2)
      },
      marginDense: {
        marginTop: 0,
        marginBottom: spacing(1)
      }
    }
  }
})

function MuiThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiThemeProvider
