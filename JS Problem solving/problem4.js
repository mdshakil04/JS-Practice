function isLGSeven(x){
    if (typeof x !== "number"){
        return "Please Provide a Number!"
    }
    else{
        const  difference = x -7;
        if(difference < 7){
            return difference;
        }
        else{
            return x*2;
        }
    }
}
console.log(isLGSeven(8));