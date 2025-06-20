// Exporting module

const basket = [];
const shippingCost = 10;

// For the first option of exporting we have to add "export" before the thing that we want to export
export const addToBasket = function (food, quantity) {
  basket.push({ food, quantity });
  console.log(`The ${food} was added to the basket in number: ${quantity}.`);
};

console.log('Exporting module');

// We can max export things by using curly braces with that items
// We can even change the name in exporting part
export { basket, shippingCost as cost };

// There is also another way useing default export

export default function (food, quantity) {
  basket.push({ food, quantity });
  console.log(`The ${food} was added to the basket in number: ${quantity}.`);
}
