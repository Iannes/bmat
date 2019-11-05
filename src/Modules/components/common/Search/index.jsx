import React from "react"
import Downshift from "downshift"
import Paper from "@material-ui/core/Paper"
import { renderInput } from "./methods/renderInput"
import { renderSuggestion } from "./methods/renderSuggestion"
import { getSuggestions } from "../../../helpers/getSuggestions"
import { useStoreState } from "../../../../Lib/contexts/Store"
import { useStyles } from "./Styles"

export default function SearchField() {
  const state = useStoreState()
  const classes = useStyles()

  return (
    <article className={classes.root}>
      <Downshift id="auto-complete">
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: "Search for a title"
          })

          return (
            <article className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label: "Song Title",
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps
              })}

              <article {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue, state.metaData).map(
                      (suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: suggestion.title }),
                          highlightedIndex,
                          selectedItem
                        })
                    )}
                  </Paper>
                ) : null}
              </article>
            </article>
          )
        }}
      </Downshift>
    </article>
  )
}
