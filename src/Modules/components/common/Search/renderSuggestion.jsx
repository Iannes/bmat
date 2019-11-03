import React from "react"
import MenuItem from "@material-ui/core/MenuItem"

export const renderSuggestion = suggestionProps => {
  const { suggestion, index, highlightedIndex, selectedItem } = suggestionProps
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || "").indexOf(suggestion.title) > -1

  return (
    <MenuItem
      key={`${suggestion.title}-${suggestion.isrc}`}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.title}
    </MenuItem>
  )
}
