// Step 1
// To check if we have installed npm we can simply wirte in terminal: npm -v
// NPm allows us to install external libraries in simple matter

// Step 2
// if NPM is installed next we have to initialize it with: npm init
// It creates package json

// Step 3 - Optional but very important library
// There is very important library which containes many usefull methods: Lodash https://lodash.com/
// For now where we dont use bundler we will install version for ES
// npm -i or install (from install) lodash-es

// Next we import the method which we are interested in

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const obj = { food: [{ pizza: 2 }, { bread: 4 }], status: 'working' };

const objNew = cloneDeep(obj);

console.log(obj);
console.log(objNew);
