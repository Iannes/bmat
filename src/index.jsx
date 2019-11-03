import React from "react"
import ReactDOM from "react-dom"
import App from "./Modules/components/App"
import * as serviceWorker from "./serviceWorker"

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById("root"))

serviceWorker.unregister()
