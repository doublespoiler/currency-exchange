# CURRENCY CONVERTER

#### By Skylan Lew

#### Epicodus Project 6, Asynchrony and APIs

## Technologies Used

* HTML
* CSS
* JS
* Node
* npm
* babel
* ESLint
* Jest
* Webpack
* dotenv
* ExchangeRate-API

## Description

This application takes any amount in USD (to cents) and converts it to any other currency using [ExchangeRate-API](https://www.exchangerate-api.com/). Only a free plan/key is needed.

The user may pick between Chinese Yuan, Euro, GBP, and Japanese Yen, or they may put any other acceptable 3 letter currency code, as defined by [ExchangeRate-API](https://www.exchangerate-api.com/docs/supported-currencies).

The application will only allow the user to put numbers for the amount to convert, and only accepts 3 characters for the letter code. It will return appropriate errors for Type Error (number for 3 letter code) or unknown 3-letter code. It also autmoatically uses CNY if the user inputs RMB.

Upon choosing to put their own 3-letter code, the application will automatically switch their chosen radio input to the "other" selection.

The user can click the "help" superscript to view a list of acceptable currency codes.

It can be used over and over again for the same or different values until API calls run out.

## Setup/Installation Requirements

* Tested on Node 16.16.0

### Visit the Site

### Build Yourself

* Clone `git clone https://github.com/doublespoiler/currency-exchange`
* Install packages necessary for build `$ npm install`
* Sign up/login to [ExchangeRate-API](https://app.exchangerate-api.com/dashboard)
* Click "API keys" in the dashboard sidebar
* Generate a new API key, or use your existing API key
* Create a file called `.env` in your root folder, containing ONLY `API_KEY=YOURAPIKEYHERE`
* Build project `$ npm run build`
* Open /dist/index.html to use the site!

## Known Bugs

* none

## License

[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)

Copyright (c) 2022 Skylan Lew
