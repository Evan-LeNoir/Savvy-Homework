// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function firstFunction(param1 = 2, param2 = 1) {
  console.log("First Param", param1);
  console.log("Second Param", param2);
  return param1 + param2;
}

function birthdayGreeter(name, birthYear, currentYear) {
  const age = currentYear - birthYear;
  return `"Happy Birthday ${name}! You are ${age} years old today"`;
}
console.log(birthdayGreeter("Evan", 1988, 2020));

// invoke the function and pass in two numbers
firstFunction(2, 3);

// invoke the function and pass in more than two numbers
firstFunction(4, 7, 5); // ? just like reassigning a var, pissing in params can change.

// invoke the function and pass in only one number
firstFunction(9); // ? second param will come back as undefined because it was not called upon.

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
console.log("Second Function Starts.");
function secondFunction(param1, param2, ...args) {
  console.log(param1);
  console.log(param2);
  console.log(args);
}

// again, invoke the function and pass in more than two numbers
secondFunction(1, 2, 3, 4, 5, 6);

function orderPizza(crust, sauce, ...toppings) {
  return `Here's your ${crust} crust pizza with ${sauce} and ${toppings[3]}.`;
}
console.log(
  orderPizza("thin", "tomatoes", "peppers", "onions", "pineapples", "bacon")
);
