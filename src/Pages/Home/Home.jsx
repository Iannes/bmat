import React from "react"
import Results from "../../Modules/components/Results/Results"
import Modal from "../../Modules/components/common/Modal"
import Banner from "../../Modules/components/common/Banner"
import Search from "../../Modules/components/common/Search"

export const Home = ({ state }) => {
  return (
    <Banner style={{ width: "100%" }}>
      <Search />
      <Results state={state} />
      <Modal data={state.metaData} />
    </Banner>
  )
}
