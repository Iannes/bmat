import React from "react"
import { useStoreState } from "../../Lib/contexts/Store"
import db from "../../Api/db.csv"
import metaData from "../../Api/metadata.csv"
import useFetchData from "../../Modules/hooks/useFetchData"
import Results from "../../Modules/components/Results/Results"
import Modal from "../../Modules/components/common/Modal"
import Banner from "../../Modules/components/common/Banner"
import Search from "../../Modules/components/common/Search"

const Home = () => {
  const state = useStoreState()
  useFetchData(db, "FETCH_DATA")
  useFetchData(metaData, "FETCH_META_DATA")

  return (
    <Banner style={{ width: "100%" }}>
      <Search />
      <Results state={state} />
      <Modal data={state.metaData} />
    </Banner>
  )
}

export default Home
