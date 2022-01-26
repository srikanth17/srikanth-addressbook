## Application

I've created a address book to store the addresses which can be entered manually or via postcode lookup.

This application is built on ES6 JavaScript using React and TypeScript & bootstrapped by create react app. Information about the _create-react-app_ & to run this application is mentioned in the later part of this document.

## API Key

Please get a API key from https://getaddress.io (sign up with an email to get free trial) & create a `.env.local` file in the root directory. Inside that file add your API key with this name

API_SECRET=YOUR-API-KEY. This key is used inside the `utils.ts` file.

## Directory Structure

All the TS code live in _/src/_ directory. _index.tsx_ is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

## Redux Store

I've used redux toolkit to create the Redux store. The reducer and actions are in one place. So, it's easy to manage. It's configure in _/src/store/_

## Components

1. App - Home page of the application. Allows to add new address & shows the list of added addresses
2. Header - Renders the header part of the application
3. Form - Used to add a address (manual entry or from API)
4. AddressList - Shows the list of addresses

## Styling

Used material UI to style the application

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
