// const shakil = 84;
// const zahid = 95;
// if(shakil > zahid) {
//     console.log("Shakil will get the Cake");
// }
// else{
//     console.log("Zahid will get the Cake");
// }
// ------------------------

// const shakil = 88;
// const safiq = 78;
// const zahid = 96;
// if(shakil  > safiq && shakil > zahid){
//     console.log("Shakil will get the cake");
// }
// else if(safiq > shakil && safiq > zahid){
//     console.log("Safiq will get the cake");
// }
// else{
//     console.log("Zahid will get the cake");
// }

// find max number with validation massage
function findMax(x, y, z){
    if(typeof x !=='number' || typeof y !=='number' || typeof z !=='number'){
        console.log("Please input a Number");
    }
    else if(x > y && x > z){
        console.log(x, "is max number") ;
    }
    else if(y > x && y > z){
        console.log(y, "is max number") ;
    }
    else {
        console.log(z, "is max number") ;
    }
}
findMax( "85", 71, 91 );
// -------------or
// function findMaxNumber (num1,num2, num3){
//     if (typeof num1 !=='number' || typeof num2 !=='number' || typeof num3 !=='number'){
//         return "Please input a Number";
//     }
//     return Math.max(num1, num2, num3);
// }
// const maxNumber = findMaxNumber(52, 35, 46);
// console.log("The maximum number is", maxNumber);