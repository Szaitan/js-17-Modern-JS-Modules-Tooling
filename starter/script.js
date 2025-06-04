// Importing module
// First and most importing thing is to declare in html document the type of document that we are exporting to module type
// Second important thing is to know that during exporting we are NOT copying code. What we do is taht we are conneting to the live server.

// First way of importing elements of code
// We have to import exact name of the thing from the exporting module in curly braces
import { addToBasket } from './shopingCart.js';
addToBasket('pizza', 4);

console.log('Importing module');
