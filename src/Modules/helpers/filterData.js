import deburr from "lodash/deburr"

/**
 * Gets autocorrect database
 *
 * @param {string} value
 * @param {array} database
 *
 */

export function filterData(value, database = []) {
  const inputValue = deburr(value.trim()).toLowerCase()
  const inputLength = inputValue.length
  const results = []

  return inputLength === 0
    ? []
    : database.filter(suggestion => {
        const matchFound =
          suggestion.title &&
          suggestion.title.slice(0, inputLength).toLowerCase() === inputValue

        if (matchFound) {
          results.push(suggestion)
        }

        return matchFound
      })
}
