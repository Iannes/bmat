import deburr from "lodash/deburr"
import { suggestions } from "../../../../mocks"

// Change to suggestion.title
// suggestion.label.slice(0, inputLength).toLowerCase() === inputValue

export const getSuggestions = (value, { showEmpty = false } = {}) => {
  const inputValue = deburr(value.trim()).toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue

        if (keep) {
          count += 1
        }

        return keep
      })
}
