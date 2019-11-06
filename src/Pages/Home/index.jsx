import React from "react"
import { useStoreState } from "../../Lib/contexts/Store"
import db from "../../Api/db.csv"
import metaData from "../../Api/metadata.csv"
import useFetchData from "../../Modules/hooks/useFetchData"
import { Home } from "./Home"

const HomeContainer = () => {
  const state = useStoreState()
  useFetchData(db, "FETCH_DATA")
  useFetchData(metaData, "FETCH_META_DATA")

  return <Home state={state} />
}

export default HomeContainer
