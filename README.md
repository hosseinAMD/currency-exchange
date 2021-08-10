# Currency Exchange

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). `Currency Exchange` is a simple web application developed by `React` and `TypeScript`.

- [x] Convert currencies
- [x] Show exchange rates history
- [x] Bonus: Show exchange rate in chart mode
- [x] Show history of conversions
- [x] Save history in case of refresh, tab closing, etc.

## Project structure and design solutions

During development of this app, future changes, further features and maintenance have been considered and tried to implement different parts modular and reusable. Having in mind to keep everything simple, the infrastructure of some further possible features implemented. Such as:

- i18n - Internationalization
- Common components like, inputs, form elements, button , etc...
- Services and helpers
- ...

## Libraries and Packages

Because of the nature of being an assignment in this project, I have tried to use third party libraries as less as possible. `node-sass` to support `scss` files and `axios` to use services with great DX, `recharts` to render chart, `react-router-dom` for routing and finally `uuid` have been used.

Although the provided design is too similar to `Material-UI` library, but for 2 reasons I didn't use it:

1.  For a light-weight application like this, It is not technically a wise and explainable decision to install a large UI library only to use a few conponents.
2.  Considering not mentioning about implementation of design with `Material-UI` explicitly, I tried to do the job near your requirements as much as possible.

## State Manager

`React Context` has been used as our state manager wherever needed. For data persistency `locaStorage` is the chosen option.

## Important Notes

1.  Unit tests have been written and our utilities are tested completely.
2.  Nomic free services does not allow to call APIs twice in a second and the `delay` option in our `use-fetch` is to work around this problem in some situations. In normal circumstances it wouldn't exist.
3.  Please consider Nomic free services does not support converting fiat currencies to each other. But crypto-crypto and crypto-fiat are okay.

## Environment variables

| Variable Name           | Description               | Value                                        |
| ----------------------- | ------------------------- | -------------------------------------------- |
| REACT_APP_BASE_URL      | Base url of nomic service | https://api.nomics.com/v1/                   |
| REACT_APP_NOMIC_API_KEY | API Key of nomic          | Just for code reviewing it's on the env file |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
