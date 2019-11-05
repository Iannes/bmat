import React from "react"
import { HashRouter } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { StoreProvider } from "../../../Lib/contexts/Store"
import AppRouter from "../../router"
// Material ui
import MaterialThemeProvider from "../../../Lib/contexts/ThemeProvider"
import AppLayout from "../common/Layout/AppLayout"
import "../../core/index.css"

const AppContainer = () => (
  <HashRouter>
    <StoreProvider>
      <CssBaseline />
      <MaterialThemeProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </MaterialThemeProvider>
    </StoreProvider>
  </HashRouter>
)

export default AppContainer
