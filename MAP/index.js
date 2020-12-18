// use of MAP in javascript
/**
 * About MAP, it returns a new array, does not change the size of the original array. 
 */
const people = [{
    name: 'Aditya',
    age: 23,
    location: 'New Delhi'
},{
    name: 'Aditya Tekur',
    age: 23,
    location: 'Chennai'
},{
    name: 'Aditek',
    age: 21,
    location: 'Boston'
}];

const age = people.map(age => age.age);
console.log(age);
console.log(people.map(name => name.name))
