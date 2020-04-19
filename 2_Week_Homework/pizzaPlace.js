let numberOfToppings = 10; // ? change this number to get different results :D //
const pizzaPlace = "Big Toni's Pizzeria";
let toppings; // ? left blank on purpose //

console.log("Type of pizzaPlace is a ", typeof pizzaPlace);
console.log("Type of numberOfToppings is a ", typeof numberOfToppings);

// eslint-disable-next-line prettier/prettier
console.log(`"Here at ${pizzaPlace}, we have ${numberOfToppings} different types of toppings for you to choose from!"`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza!");
}

// ? Bonus Challenge //
// ? Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10) //

for (toppings = 2; toppings <= numberOfToppings; toppings += 2) {
  console.log(toppings); // ? I chose this method because it makes the entire code work together and is dynamic. So now when numberOfToppings is changed, it will change how the counter below works. //
}

// ? 1st method I tried//
//for (toppings = numberOfToppings; toppings <= 10; toppings += 2) {
//  total = toppings;
//  console.log(total);
//}

// ? Second method I tried//
//for (numberOfToppings = 2; numberOfToppings <= 10; numberOfToppings += 2) {
//    total = numberOfToppings;
//    console.log(total);}
