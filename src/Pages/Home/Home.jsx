import React from "react"
import Results from "../../Modules/components/Results/Results"
import Modal from "../../Modules/components/common/Modal"
import Banner from "../../Modules/components/common/Banner"
import Search from "../../Modules/components/common/Search"
import Form from "../../Modules/components/common/Form"

export const Home = ({ state }) => {
  return (
    <>
      <Banner style={{ width: "100%" }}>
        <Search />
        <Modal data={state.metaData} />
        <Results state={state} />
        <Form />
      </Banner>
    </>
  )
}
