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
// to return the number of items and the total cart cost
let total = cart.reduce((total,cartItem) => {
    const {amount:noOfItems,price:totalCost} = cartItem;
    total.totalItems += noOfItems;
    total.cartTotal += totalCost * noOfItems;
    return total
},{
    totalItems: 0,
    cartTotal: 0
})

console.log(total)

// the same as above, just destructuring it
let {totalItems,cartTotal} = cart.reduce((total,cartItem) => {
    const {amount:noOfItems,price:totalCost} = cartItem;
    total.totalItems += noOfItems;
    total.cartTotal += totalCost * noOfItems;
    return total
},{
    totalItems: 0,
    cartTotal: 0
})
console.log(totalItems,cartTotal)


// working with a github repo examples

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

// fetching the data from the repo dataset 
// to count the total number of languages

// const fetchRepos = async() => {
//     const response = await fetch(url);
//     const data = await response.json();
//     const newData = data.reduce((total,repo)=>{
//         const {language} = repo
//         if(total[language]) {
//             total[language] = total[language] + 1
//         } else {
//             total[language] = 1
//         }
//         return total
//     },{})
//     console.log(newData)
// }
//Op for above, CSS: 46, HTML: 14, JavaScript: 37, null: 3

// total number of repos in the dataset
// const fetchRepos = async() => {
//     const response = await fetch(url);
//     const data = await response.json();
//     const newData = data.reduce((total,data)=>{
//         total += 1
//         return total
//     },0)
// console.log(newData)
// }

//total stargazers_count and watchers_count
// const fetchRepos = async() => {
//     const response = await fetch(url);
//     const data = await response.json();
//     const newData = data.reduce((total,data)=>{
//     const{stargazers_count,watchers_count} = data;
//     total.s_count += stargazers_count;
//     total.w_count += watchers_count;
//     return total
//     },{s_count:0,
//     w_count:0})
//     console.log(newData)
// }

// total number of forks and watchers for all the repos
// const fetchRepos = async() => {
//     const response = await fetch(url)
//     const data = await response.json()
//     const newData = data.reduce((total,data)=>{
//         const{forks,watchers} = data
//         total.no_of_forks += forks
//         total.no_of_watchers += watchers
//         return total
//     },{no_of_forks:0,
//     no_of_watchers:0})
//     console.log(newData)
// }


// total number of forks and watchers for JavaScript language
const fetchRepos = async() => {
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total,data)=>{
        const {language,watchers,forks} = data;
        if(language === 'JavaScript') {
            total.no_forks += forks
            total.no_watchers += watchers
        }
        return total
    },{no_watchers:0,
    no_forks:0})
    console.log(newData)
}
fetchRepos()
