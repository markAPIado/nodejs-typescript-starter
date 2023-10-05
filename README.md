# NodeJs Typescript Starter

This is a simple Typescript-based NodeJs starter template. It is a good way to start a new project with all the necessary tools and configurations. You can easily clone this repository and start working on your custom NodeJs package or NodeJs server.

This is inspired by Khalil Stemmler's [simple-typescript-starter](https://github.com/stemmlerjs/simple-typescript-starter/tree/master).

Feel free to fork this repository and make PRs to improve this starter template.

## Setup


**Installation:**

- `npm i` - installs the packages


**Husky Preparation**

- `npm run prepare` - prepares the husky hooks for the project. This is a one-time setup. You don't need to run this command again. 


**Development :**

- `npm run dev` -  runs the app in development mode.


**Production :**

- `npm start` -  runs the app in production mode.


**Testing :**

- `npm test` -  runs the test once.
- `test:watch` -  runs the test in watch mode.

**Formatting :**

- `npm run format` -  formats the code using prettier.
- `npm run format-check` -  checks the format of code using prettier.


**Linting :**

- `npm run lint` -  identifyies and reports on patterns found in ECMAScript/JavaScript code.


**Cleaning up :**

- `npm run clean` -  removes the dist folder.


## Other Features:

**Husky** - Automate tests, formatting, and linting with Husky. No more manual hassle, just smooth development. 
1.  Test Automation: Ensures code integrity.
2.  Code Formatting: Keeps your code clean.
3.  Linting: Eliminates errors.

**CI/CD** - It includes a GitHub Actions workflow to automate the CI/CD process. It runs the tests, formats the code, and checks the linting on every push to the main branch. Feel free to modify the workflow as per your needs.