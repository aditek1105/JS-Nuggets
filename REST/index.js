// REST Operator
// gathers and collects items
// destructuring functions
// placement important, be careful with the names of the function 
// rest when we declare the function and spread when we invoke the function

// arrays
const fruits = ['apple','oranges','lemon','banana'];
const[first,...restOfTheFruits] = fruits;
console.log(first,restOfTheFruits);
const specificFruit =  restOfTheFruits.find(item => item === 'lemon');
console.log(specificFruit)


// objects
const person = { name: 'Aditya', lastName: 'Tekur', job: 'Developer'}
const {name,...restData} = person
console.log(name,restData)