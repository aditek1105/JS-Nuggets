const { ConsoleErrorListener } = require("antlr4/error/ErrorListener")

// the dot notation of accessing the attributes within an object
const person = {
    name: 'Aditya'
}
console.log(person.name)
person.age = 23
console.log(person.age)

// using square bracket notation
const items = {
    'feature-items':['item1','item2']
}

console.log(items["feature-items"])
console.log(person['name'])

// using dynamic object keys
let appState = 'loading';
appState = 'error';
const dok = {
    [appState] : true
}
console.log(dok);
let computer = 'PC'
dok[computer] = 'Apple'
console.log(dok)

// creating a state object and updating its value dynamically from a user defined function

const state = {
    loading: true,
    name: '',
    age:''
}

function stateDef(key,value) {
    state[key] = value
}
stateDef('name','Aditya')
stateDef('age',23)
console.log(state)
stateDef('loading',false)
console.log(state)