import React from "react"
import { Wrapper } from "./Styles"
import AppBar from "../MenuBar"
import Search from "../../Search"

const AppLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Search />
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default AppLayout
