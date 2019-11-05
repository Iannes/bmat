import React from "react"
import { useStoreState } from "../../Lib/contexts/Store"
import db from "../../Api/db.csv"
import metaData from "../../Api/metadata.csv"
import useFetchData from "../../Modules/hooks/useFetchData"
import Table from "../../Modules/components/Table"
import Modal from "../../Modules/components/common/Modal"
import Banner from "../../Modules/components/common/Banner"
import Search from "../../Modules/components/common/Search"

const HomeContainer = () => {
  const state = useStoreState()
  useFetchData(db, "FETCH_DATA")
  useFetchData(metaData, "FETCH_META_DATA")

  return (
    <Banner style={{ width: "100%" }}>
      <Search />
      {state.searchResults && state.searchResults.length > 0 ? (
        <Table rows={state.searchResults} />
      ) : (
        <p>Search</p>
      )}
      <Modal data={state.metaData} />
    </Banner>
  )
}

export default HomeContainer
