# FE Assignment

[Live Link](https://smarkets-fe.netlify.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

## Troubleshoot
1. If the list isn't loaded, then probably it's a CORS error and maybe cors-anywhere limit is reached.
Please open this [link](https://cors-anywhere.herokuapp.com/corsdemo) and click on `Request temporary access to the demo server` in the browser you are opening the app.

### Tools Used
1. React (creact-react-app used for botstrapping).
2. react-router (to handle routing)
3. jest (as task runner and assertion)
4. figma (for design)


Since the component does not re-render much, so optimizations (like memoization etc) are not needed.