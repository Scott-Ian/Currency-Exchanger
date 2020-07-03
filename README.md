# _Currency Exchanger_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_This application will convert USD or EUR into one of several dozen international currencies utilizing the ExchangeRate-API (exchangerate-api.com). The program will dynamically display an error should an API call go awry, or it will display a unique error message should the user somehow manage to enter in an unsupported currency code._

## Setup/Installation Requirements

_Open via Bash/GitBash_
  1. Clone this repository onto your computer: https://github.com/Scott-Ian/Currency-Exchanger.git
  2. Navigate into the "Currency-Exchanger" directory in Visual Studio Code, or your preferred text editor
  3. In the top level of the program directory create the following file: ".env"
  4. Paste your own API key into the .env file using the following format: API_KEY = [API KEY GOES HERE!]
    * To acquire your own unique API key please go to exchangerate-api.com and sign up for a free account using an email address
    * After account creation, sign in and retrieve your unique API key from the Dashboard
    * **This program WILL NOT FUNCTION without this unique API key**
  5. Install all necessary packages with the following terminal command: $ npm install
  6. Build the project with: $ npm run build
  7. Open a live development server in your browser with: $ npm run start

## Specifications

| | Behavior | Input | Output | isComplete |
|----|----|----|----|----|
|1.| The program should take in a base currency value and store it within a currency exchange object| $42 | $42 | _True_ |
|2.| The currency exchange object will accept a base value currency and store it within the currency exchange object| JPY | JPY | _True_ |
|3.| The currency exchange object will accept a second currency  to be converted to and store it within the currency exchange object| ISK | ISK | _True_ |
|4.| The program will be able to make an API call to the exchange rate API and utilize the user input American Dollars and foreign currency to return a converted currency value | $10 | 746.44 Indian Rupee | _True_ |
|5.| If the API call results in an error, the application will return a notification that states what the error is| $10 to Baskar Steele | Error 204: No Content | _True_ |
|6.| If the user attempts to convert a currency that the exchange API response doesn't include, the program will respond with an error saying that currency doesn't exist| $10 to Baskar Steele | Error: That currency doesn't exist | _True_ |
|7.| The user can only submit USD or EUR as a base currency, and others will not be permitted| N/A | N/A  | _True_ |
|8.| User can only submit a new currency code from those available from the API| USD, 15, MXN | 335 MXN | _True_ |

## Known Bugs

_There is a visual error with the submission button for the currency exchange form. I am unsure if this is localized to my development environment, or if the error is due to another issue. I've never had the Bootstrap button class not affect a visual change before. Additionally, my final test to ensure the API is working within currency-exchanger.test.js is does not complete successfully, even though the code is functioning. I belive that the issue is due to the test not fully waiting until the API is called before running. However, I did ensure to make the test an asynchronous function, and included the await keyword for the api call method within the test. _

## Support and contact details

_If you have any questions, run into any issues or bugs, or if you would like to contribute to this project, please contact the author via e-mail at: chesnekov@gmail.com_

## Technologies Used

_This program utilizes HTML, CSS, Bootstrap, JQuery, Node Packet Manager, Jest for some test-driven development, as well as promises, synchronous and asynchronous functions, and the fetch method of querying an API, with a dynamically changing API request URL._

### License

Copyright (c) 2020 **_Ian Scott._** This web project is licensed under the MIT license. 