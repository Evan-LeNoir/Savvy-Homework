let numberOfToppings = 10;
const pizzaPlace = "Big Toni's Pizzaria";

console.log("Type of pizzaPlace is a ", typeof pizzaPlace);
console.log("Type of numberOfToppings is a ", typeof numberOfToppings);

console.log(
  `"Here at ${pizzaPlace}, we have ${numberOfToppings} different types of toppings for you to choose from"`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza!");
}

for (toppings = numberOfToppings; toppings <= 10; toppings += 2) {
    total = toppings;
    console.log(total);
}

//for (numberOfToppings = 1; numberOfToppings <= 10; numberOfToppings += 2) {
//    total = numberOfToppings;
//    console.log(total);}