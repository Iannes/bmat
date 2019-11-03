import React from "react"
import { Wrapper } from "./Styles"
import AppBar from "../MenuBar"

const AppLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default AppLayout
