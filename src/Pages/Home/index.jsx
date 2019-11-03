import React from "react"
import { useStoreState } from "../../Lib/contexts/Store"
import db from "../../Api/db.csv"
import metaData from "../../Api/metadata.csv"
import useFetchData from "../../Modules/hooks/useFetchData"
import List from "../../Modules/components/List"
import Modal from "../../Modules/components/common/Modal"

const HomeContainer = () => {
  const state = useStoreState()
  useFetchData(db, "FETCH_DATA")
  useFetchData(metaData, "FETCH_META_DATA")

  return (
    <section style={{ width: "100%" }}>
      <List rows={state.data} />
      <Modal data={state.metaData} />
    </section>
  )
}

export default HomeContainer
