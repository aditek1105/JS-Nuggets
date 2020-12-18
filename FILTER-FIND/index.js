// filter - this returns a new array, and can manipulate the size of the new array ( unlike map ), returns based on condition specified
// find - returns a single instance (object), returns the first match, if no match returns undefined 
const people = [
    {name: 'Aditya', age: 20, gender: 'Male'},
    {name: 'Prinesh', age: 23, gender: 'Male'},
    {name: 'Sakshi', age: 25, gender: 'Female'},
    {name: 'Ananya', age: 29, gender: 'Female'}
];
// filter
const age_filter = people.filter(age => age.age > 24)
console.log(age_filter)

//no match
const age_no_match = people.filter(age => age.age > 100) 
console.log(age_no_match)

//find
const find_gender = people.find(gen => gen.gender === 'Female')
console.log(find_gender)

//no match
const find_no_match = people.find(gen => gen.age === 30)
console.log(find_no_match)
