import React from "react"
import Papa from "papaparse"
import { useStoreDispatch } from "../../Lib/contexts/Store"

const useFetchData = (fileInput, type = "FETCH_DATA") => {
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
  }, [fileInput])

  React.useEffect(() => {
    dispatch({
      type,
      payload: {
        data: rows
      }
    })
  }, [dispatch, rows, type])
}

export default useFetchData
