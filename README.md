## de Bijenkorf Frontend Dev assignment

- This project utilizes React to asynchronously fetch data from a dummy backend API when queries are placed in a search form. 
- A list of four search suggestions is displayed onKeyUp when a query is longer than two characters. 
- onFocus the form becomes active.
- onBlur the form becomes inactive and query input is cleared.
- An additional form control is provided by a 'clear button' which is displayed only when there is query input. onMouseDown the button clears query input and the form remains active.
- Test coverage/UI documentation is provided using Enzyme and Storybook.

## Contents

1. **[Technologies Used](#technologies-used)**
2. **[Start up](#start-up)**
3. **[create-react-app-docs](#create-react-app)**

#### View samples within this project by clicking the links below
## Technologies Used

- **[react](./src/components/SearchFormContainer.js)**
- **[css](./src/css/SearchForm.css)**
- **[axios](./src/services/bijenkorfTruien.js)**
- **[enzyme](./src/__tests__/searchFormContainer.test.js)**
- **[storybook](./src/stories/index.js)**

## Start up

1. Install required dependencies using 'npm install'.
2. Run this assignment in development mode using 'npm start'.
3. After which you may run 'npm run test' or 'npm run coverage' for test coverage or 'npm run storybook' for UI documentation.

## Create React App

This project was scaffolded using the create-react-app cli. 

**[The standard create-react-app docs can be found in here](./create-react-app-docs.md)**
