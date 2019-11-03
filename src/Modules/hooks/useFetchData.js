import React from "react"
import Papa from "papaparse"
import fileInput from "../../Api/db.csv"
import { useStoreDispatch } from "../../Lib/contexts/Store"

const useFetchData = () => {
  const [rows, setRows] = React.useState([])
  const dispatch = useStoreDispatch()

  React.useEffect(() => {
    async function getData() {
      const response = await fetch(fileInput)
      const reader = response.body.getReader()
      const result = await reader.read()
      const decoder = new TextDecoder("utf-8")
      const csv = decoder.decode(result.value)
      const results = await Papa.parse(csv, { header: true })
      const dataRows = results.data
      setRows(dataRows)
      console.log("Fetched results")
    }
    getData()
  }, [])

  React.useEffect(() => {
    dispatch({
      type: "FETCH_DATA",
      payload: {
        data: rows
      }
    })
  }, [dispatch, rows])
}

export default useFetchData
