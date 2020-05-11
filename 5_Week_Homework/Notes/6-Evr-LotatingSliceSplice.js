const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
//let firstA = arr.indexOf("a");
//let firstB = arr.indexOf("b");
//let firstC = arr.indexOf("c");
//console.log();

// find the last index of "a", "b", and "c"
//let lastA = arr.lastIndexOf("a");
//let lastb = arr.lastIndexOf("b");
//let lastc = arr.lastIndexOf("c");
//console.log(lastA);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let firstA = arr.indexOf("a");
let lastA = arr.lastIndexOf("a");

while (firstA !== lastA) {
arr.splice (lastA, 1);
lastA = arr.lastIndexOf("a");
return arr;
}