function isPrimeNumber(n){
    if(n<2){
        console.log("Not a prime number")
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
        console.log("Not a prime number")
            return false;
        }
    }
        console.log("A prime number")
    return true;
}

// Example :
isPrimeNumber(7) // A prime number
isPrimeNumber(6) // Not a prime number
