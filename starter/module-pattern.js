// Module pattern
// One of the ebst ways of module pattern is to implement effi function which has safe data and can easly return values which works fine for API function
// Its working fine thanks to clouser

const ShoppingCart2 = (function () {
  const cart = [];
  const totalPrice = 234;
  const shippingCost = 10;
  const totalQuantity = 22;

  const addToCart = function (food, quantity) {
    cart.push({ food, quantity });
    console.log(`The ${food}: ${quantity} was added to the cart.`);
  };

  const orderStock = function (food, quantity) {
    console.log(`The ${food} was added to the basket in number: ${quantity}.`);
  };

  // Here we return the object which will make public some aspect of code

  return { cart, totalPrice, addToCart, totalQuantity };
})();

console.log(ShoppingCart2.cart);
ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.addToCart('bannana', 4);
