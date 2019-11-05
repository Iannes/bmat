import React from "react"
import Downshift from "downshift"
import Paper from "@material-ui/core/Paper"
import { useStoreState, useStoreDispatch } from "../../../../Lib/contexts/Store"
import { renderInput } from "./methods/renderInput"
import { renderSuggestion } from "./methods/renderSuggestion"
import { getSuggestions } from "../../../helpers/getSuggestions"
import { useStyles } from "./Styles"
import { filterData } from "../../../helpers/filterData"
import { getResults } from "../../../../Lib/actions"

export default function SearchField() {
  const state = useStoreState()
  const classes = useStyles()
  const ref = React.useRef()
  const dispatch = useStoreDispatch()

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      // TODO: Dispatch
      const result = filterData(ref.current.value, state.data, "artist")
      ref.current.value = ""
      dispatch(getResults(result))
    }
  }

  return (
    <article className={classes.root}>
      <Downshift id="auto-complete">
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: "Search by artist's name"
          })

          return (
            <article className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label: "Artist",
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps,
                onKeyPress: handleKeyPress,
                ref
              })}

              <>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue, state.metaData).map(
                      (suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({
                            item: suggestion.artist
                          }),
                          highlightedIndex,
                          selectedItem
                        })
                    )}
                  </Paper>
                ) : null}
              </>
            </article>
          )
        }}
      </Downshift>
    </article>
  )
}
