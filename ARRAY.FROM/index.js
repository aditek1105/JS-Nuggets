//Array.from - not a prototype

// from - returns Array object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const text = "ESPN"

const split = [...text]
console.log(split)
// both are same
console.log(Array.from(text))