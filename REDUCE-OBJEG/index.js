//Reduce - Objects


// cart example
const cart = [{
    title: 'Nike',
    price: 200,
    amount: 1
},{
    title: 'Adidas',
    price: 300,
    amount: 2
},{
    title: 'Puma',
    price: 100,
    amount: 10
},{
    title: 'Reebok',
    price: 300,
    amount: 1
}]

let total = cart.reduce((total,cartItem) => {return total},{})
console.log(total)