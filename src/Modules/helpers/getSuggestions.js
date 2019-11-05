import deburr from "lodash/deburr"

/**
 * Gets autocorrect suggestions
 *
 * @param {string} value
 * @param {boolean} showEmpty
 * @param {array} suggestions
 *
 */

export function getSuggestions(
  value,
  suggestions = [],
  { showEmpty = false } = {}
) {
  const inputValue = deburr(value.trim()).toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.artist &&
          suggestion.artist.slice(0, inputLength).toLowerCase() === inputValue

        if (keep) {
          count += 1
        }

        return keep
      })
}
