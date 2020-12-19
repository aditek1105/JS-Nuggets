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
const {job,...restData} = person
console.log(job,restData)

//functions

const getAverage = (name,...scores) => {
console.log(name)
console.log(scores)
const average = scores.reduce((total,item)=>{
    console.log(total)
    return total += item
},0)/scores.length
console.log(average)
}

//getAverage(person.name,10,10,10)
const testScores = [10,20,30,40]
getAverage(person.name,...testScores)