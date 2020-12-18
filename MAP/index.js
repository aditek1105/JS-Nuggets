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

const det = people.map((item) => {
    return {
    firstName: item.name,
    place: item.location
    }
})
console.log(det)

// using template function to display the result on the webpage
const locationdetails = people.map(items => `<h2>${items.location}</h2>`)
const names = people.map(name => name.name)

const res = document.querySelector("#temp")
const result = document.querySelector("#result");

result.innerHTML = locationdetails.join('');
res.innerHTML = names.join(' ');
