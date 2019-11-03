import React from "react"

export default function Options({ data = [] }) {
  return (
    data &&
    data.map(item => {
      const { artist, title, isrc } = item
      return (
        <option key={`${isrc}-${title}`} value={title}>
          {artist && title ? `${artist} - ${title}` : "None"}
        </option>
      )
    })
  )
}
