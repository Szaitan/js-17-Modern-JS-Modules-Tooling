// Exporting module

const basket = [];
const shippingCost = 10;

// For the first option of importing we have to add "export" before the thing that we want to export
export const addToBasket = function (food, quantity) {
  basket.push({ food: quantity });
  console.log(`The ${food} was added to the basket in number: ${quantity}.`);
};

console.log('Exporting module');
