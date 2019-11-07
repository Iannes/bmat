import deburr from "lodash/deburr"

/**
 * Searches database
 *
 * @param {string} value
 * @param {array} database
 *
 */

export function filterData(value, database = [], key = "title") {
  const inputValue = deburr(value.trim()).toLowerCase()
  const inputLength = inputValue.length
  const results = []

  return inputLength === 0
    ? []
    : database.filter(suggestion => {
        const matchFound =
          suggestion[key] &&
          suggestion[key].slice(0, inputLength).toLowerCase() === inputValue

        if (matchFound) {
          results.push(suggestion)
        }

        return matchFound
      })
}
