const phones = [
    { name: 'Samsung', camera:32,  storage:'32gb', price: 35000, color:'silver'},
    { name: 'Realme', camera:10,  storage:'64gb', price: 38000, color:'Black'},
    { name: 'Oppo', camera:16,  storage:'128gb', price: 30000, color:'blue'},
    { name: 'Xiaomi', camera:24,  storage:'256gb', price: 3000, color:'silver'},
    { name: 'Vivo', camera:64,  storage:'32gb', price: 5000, color:'silver'},
    { name: 'Tecno', camera:108,  storage:'32gb', price: 31000, color:'silver'},
    { name: 'Apple', camera:24,  storage:'32gb', price: 305000, color:'silver'}
];
// Find Cheapest phone from an Array of Obbject
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let  i = 0;  i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones)
console.log(mySelection);

// Find Highest resulation camera phone fron an array of Object
function highestResulation(phones){
    let highResulation  =  phones[0];
    for (let i = 0; i <phones.length; i++){
        const phone = phones[i];
        if(phone.camera >  highResulation.camera){
            highResulation = phone;
        }
    }
    return highResulation
}
const mySelectedPhone = highestResulation(phones);
console.log(mySelectedPhone);