import React from "react"

export const Home = ({ data = [] }) => {
  React.useEffect(() => {
    console.log(data)
  }, [data])
  return (
    data &&
    data.map(item => {
      return <p key={`${item.isrc}-${item.title}`}>{item.artist}</p>
    })
  )
}
