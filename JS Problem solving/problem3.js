function mindGame(x){
    if(typeof x !== "number"){
        return "Please provide a Number";
    }
    else if(x <= 0){
        return "Please provide a positive number"
    }
    else{
        const result = (((x*3)+10)/2)-5
        return result;
    }
}
console.log(mindGame(10))