//Reduce 
// iterates, callback function
// reduces the result to a single value
// 1st parameter - total of all calculations
// 2nd parameter - current iteration/value
const staff = [
{name:'Aditya',age:23,position:'SDE',salary:100},
{name:'Prinesh',age:23,position:'Cloud Developer',salary:500},
{name:'Nikhil',age:22,position:'Supply Chain Expert',salary:300},
{name:'Rohan',age:28,position:'SDE',salary:50}]

const dailyTotal = staff.reduce((total,person) => {
    console.log(total)
    console.log(person.salary)
    total += person.salary
    return total
},0)

console.log(dailyTotal)