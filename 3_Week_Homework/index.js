// Ze toppingz!
//greetCustomer(" Bacon", " Pineapple", " Parmesan", " Steak", " Sausage", " Olives", " Sardines", " Bologna");

const pizzaPlace = "Big Toni's Pizzeria";

function greetCustomer(pizzaJoint, ...args) {
//  new Intl.ListFormat().format("toppings", "Bacon", "cheese");
//  for (let topping of toppings) {}
//  toppings.push("and");
//  toppings.unshift("Evan");
  return `"Welcome to ${pizzaPlace}! We have a number of toppings ranging from  ${args}"`;
}
console.log(greetCustomer(" Bacon", " Pineapple", " Parmesan", " Steak", " Sausage", " Olives", " Sardines", " Bologna"));
//console.log(greetCustomer(pizzaPlace, "Evan", toppings));

//console.log(`"Welcome to ${pizzaPlace}! I'll be taking your order today. The toppings we offer are ${getTopping} "`);
//function getOrder() {};

//function pizzaPrep() {};

//function servePizza() {};

//greetCustomer();