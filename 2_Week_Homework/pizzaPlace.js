let numberOfToppings = 6;
const pizzaPlace = "Big Toni's Pizzaria";

console.log("Type of pizzaPlace is a ", typeof pizzaPlace);
console.log("Type of numberOfToppings is a ", typeof numberOfToppings);

console.log(`"Here at ${pizzaPlace}, we have ${numberOfToppings} different types of toppings for you to choose from!"`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza!");
}

//?I chose this method because it makes the entire code work together and is dynamic. So now when numberOfToppings is changed, it will change how the counter below works.//
for (toppings = 2; toppings <= numberOfToppings; toppings += 2) {
    console.log(toppings);
  }

  //?1st method I tried//
//for (toppings = numberOfToppings; toppings <= 10; toppings += 2) {
//  total = toppings;
//  console.log(total);
//}

  //?Second method I tried//
//for (numberOfToppings = 2; numberOfToppings <= 10; numberOfToppings += 2) {
//    total = numberOfToppings;
//    console.log(total);}
