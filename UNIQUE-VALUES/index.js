//To get the unique values from the array.

const menu = [{
name: 'pancakes',
category: 'Breakfast'
},{
name: 'burger',
category: 'Lunch'
}, {
    name: 'dal makhani',
    category: 'Lunch'
}, {
    name: 'Kadai Paneer',
    category: 'Dinner'
}, {
    name: 'Pizza',
    category: 'Dinner'
}, {
    name: 'idli',
    category: 'Breakfast'
}]

var categories = menu.map(item => item.category)
console.log(categories)

// to get the unique values from the array, we use set
categories = new Set(menu.map(item => item.category))
console.log(categories)
// Now categories is a set which is a object, to convert it back to array, we use spread operator
categories = [...new Set(menu.map(item => `<h2>${item.category}</h2>`))]
console.log(categories)

const display = document.querySelector("#result");
display.innerHTML = categories.join('')

display.innerHTML = categories.map(temps => {
    return `<button>${temps}</button>`
}).join('  ')