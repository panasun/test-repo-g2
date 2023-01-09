const numbers = [1, 2, 3, 4, 5];

// Use .map to double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Use .filter to keep only even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Use .reduce to sum all the numbers
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // 15