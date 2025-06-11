// Importing module
// First and most importing thing is to declare in html document the type of document that we are exporting to module type
// Second important thing is to know that during exporting we are NOT copying code. What we do is taht we are conneting to the live server.

// First way of importing elements of code
// We have to import exact name of the thing from the exporting module in curly braces
// We can change the name of imported thing
import { addToBasket, basket as bs, cost } from './shopingCart.js';
addToBasket('pizza', 4);

console.log('Importing module');

console.log(bs, cost);

// The other is to import everything with the use of *
import * as ShoppingCart from './shopingCart.js';
console.log(ShoppingCart.basket);

// importing default module
// Important thing its never good to mix name export with default export
import add from './shopingCart.js';
add('kabanos', 2);
