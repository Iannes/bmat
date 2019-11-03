import React from "react"
import TriggerDialog from "./TriggerDialog"
import Modal from "../common/Modal"

export default function Select({ data = [] }) {
  return (
    <>
      <Modal data={data} />
      <TriggerDialog />
    </>
  )
}
