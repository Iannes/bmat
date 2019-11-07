## Overview

- 🎨 Material UI Global Theme
- 📰 Eslint
- 📱 Mobile friendly
- 🚀 Templates for reducers and components

### Folder Structure

```shell
├── src/
  ├── Api/ # DB
  ├── Lib/ # Context Api
      └── contexts
      └── reducers
  ├── Modules/
      └── components
          └── App
      └── core
      └── helpers
      └── hooks   # custom hooks
      └── router
  └── Pages
```

## Dependencies

Clone the repo and run `yarn` or `npm intall` to install all dependencies.

## Running the app

From the project directory you can run the following commands:

### `yarn start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### Providers

All providers are found [in the app's entry point](src/Modules/components/App/index.jsx). Context Providers use React's own `Context Api` to share state among components.

### CSV Parsing

The project utilises [PapaParse](https://www.papaparse.com/) to read the `csv` values.

### Design Choices

<hr>

#### Matching Candidates

For the first part of this exercise, I chose to use a hidden modal component, as in my opinion
it declutters the page, as opposed to having two lists showing at the same time.

The modal can be opened by clicking on the top-right-hand corner of the header, as well as clicking on the left hand-side of the search bar.

#### Database Search

I chose to show the search bar prominently on the center of the page, as I believe this increases user engagement and makes for a simpler user journey.

That could be improved however, by either hiding the search bar and open it using a button, or simply by setting it open at the center of the header.

#### Add new recording to the database

The user can add a new recording to the database, by clicking on the plus icon on the right hand side of the search bar.

When no results are found, the user sees some text prompting them to add new songs to the database.
