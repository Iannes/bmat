import React from "react"
import { useStoreState } from "../../Lib/contexts/Store"
import db from "../../Api/db.csv"
import useFetchData from "../../Modules/hooks/useFetchData"
import Table from "../../Modules/components/Table"

const HomeContainer = () => {
  const state = useStoreState()
  useFetchData(db, "FETCH_DATA")

  return (
    <section className="HomeContainer">
      <Table rows={state.data} />
    </section>
  )
}

export default HomeContainer
