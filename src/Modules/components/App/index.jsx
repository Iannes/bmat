import React from "react"
import { HashRouter } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppRouter from "../../router"
// Material ui
import MaterialThemeProvider from "../../../Lib/contexts/ThemeProvider"
import AppLayout from "../common/Layout/AppLayout"

const AppContainer = () => (
  <HashRouter>
    <CssBaseline />
    <MaterialThemeProvider>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </MaterialThemeProvider>
  </HashRouter>
)

export default AppContainer
