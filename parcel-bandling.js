// Parcell is a tool which alows to:
/*
Do czego służy?
Parcel to tzw. bundler, czyli narzędzie do budowania projektu frontendowego.
Co robi?
    Łączy wiele plików .js, .css, .html, .scss, obrazków itp. w jeden (albo kilka zoptymalizowanych) plików.
    Transpiluje nowoczesny kod JS (np. import/export, async/await, JSX) na kod kompatybilny z przeglądarkami (np. przez Babel).
    Obsługuje hot-reload (czyli automatyczne odświeżanie strony przy zmianie kodu). 
    Działa z minimalną konfiguracją (w przeciwieństwie do np. Webpacka).
*/
import { cloneDeep } from 'lodash-es';

const obj = { food: [{ pizza: 2 }, { bread: 4 }], status: 'working' };

const objNew = cloneDeep(obj);
objNew.food[0].pizza = 'kaput';

console.log(obj);
console.log(objNew);

// First step
// Parcell is installed in dev form which is diffrent dependency, which is not included in our code. It's simple is used to build our code.
// We do it by typing: npm i parcel --save-dev

//Second step
// There are two ways of running parcel 1) using NPX(application build in npm) and 2) using NPM script
// Lets start with first one - NPX
// to start parcel we type: npx parcel index.html

// What it does?
// It created dist folder (distribution) which will be a folder which we will send for production, final use.

// To remove page reload from our webside we can add option module.hot
// It will remove reload and this code is only visible for parcel
// See bottom of code base

// Second way to launch parcel is to use npm scripts in folder package json

/*
Example:
  "scripts": {
    "start": "parcel index.html"
  },
*/

// Now we can simple use coman: npm run start which will run parcell index.html

// And now when we are done building our proejct we have to prepare the finale bundle of proejt with new command/script
// build

/*
Example:
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
*/

// This code have to be at the end of page
if (module.hot) {
  module.hot.accept();
}
