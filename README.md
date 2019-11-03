## Overview

React Starter using CRA and React Router

## Features

- 🎨 Material UI Global Theme
- 📰 Eslint
- 🛣 React Router
- 🎨 Storybook
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

### Providers

All providers are found [in the app's entry point](src/Modules/components/App/index.jsx)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Runs storybook server on port 9009
