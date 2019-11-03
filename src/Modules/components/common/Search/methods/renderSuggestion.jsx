import React from "react"
import MenuItem from "@material-ui/core/MenuItem"

export const renderSuggestion = suggestionProps => {
  const {
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  } = suggestionProps
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="article"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}
