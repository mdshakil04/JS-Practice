// const shoppingCart = [
//     {name: 'Shoe', price: 1200},
//     {name: 'Shirt', price: 1500},
//     {name: 'Pant', price: 200},
//     {name: 'T-shirt', price: 500},
//     {name: 'Jainga', price: 150},
//     {name: 'Cap', price: 100},
//     {name: 'Sendu', price: 80}
// ]
// function totalCost(products){
//     let sum = 0;
//     for(i = 0; i < products.length; i++){
//         const product = products[i];
//         sum = sum + product.price;
//         // console.log(product)
//     }
//     return sum;
// }
// const expense = totalCost(shoppingCart);
// console.log('total expense today:', expense)

// Quantity Cart

const shoppingCart = [
    {name: 'Shoe', price: 1200, quantity: 5},
    {name: 'Shirt', price: 1500, quantity: 2},
    {name: 'Pant', price: 200, quantity: 5},
    {name: 'T-shirt', price: 500, quantity: 4},
    {name: 'Jainga', price: 150, quantity: 3},
    {name: 'Cap', price: 100, quantity: 2},
    {name: 'Sendu', price: 80, quantity: 5}
]
function totalCost(products){
    let sum = 0;
    for(i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product)
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('total expense today:', expense)