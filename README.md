# BEES Front-end Test
This project was created with `yarn create next-app --typescript` in order to initialize the project with typescript configurations.

## Running the app
Start by installing all dependencies by using `yarn` or `npm install`

Then, to run the project in your local use `yarn dev`  or `npm run dev`
To run tests use `yarn test`or `npm run test`

## Tools used

-  [styled-components](https://styled-components.com/): 
	for styling of the app

 - [axios](https://axios-http.com/):
	 for api data fetching

-  [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/):
	for unit testing

-  [nookies](https://github.com/maticzav/nookies)
	for using cookies to store and fetch user data

## Folder structure
For folder structure I chose to work with a `public` folder to hold out images and a `src` folder, inside it we have a `components` folder for all of our components, a `pages` folder for our pages, a `styles` folder for our global and Home styles, a `tests` folder to put our page tests, a `@types` folder for some reusable types a `utils` folder for utility functions and a `context` folder to create our BreweriesContext for global state management.

Each component's individual tests and styles are inside their respective folders.

## Bonus features
I've used typescript for the app, used context for global state management, wrote unit tests using jest and react-testing-library, implemented the add new tag function, made the app responsive, made some logic to validate if the user entered only valid characters in the first screen, added a Loading state to the `/breweries` page, made an Error handling for an empty state if axios can't get breweries and tried to make my working process clear in my git commit history.