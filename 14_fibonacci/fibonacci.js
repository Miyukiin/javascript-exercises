const fibonacci = function(nthFibonacciNumber) {
    let validatedNthFibonacciNumber = parseInt(nthFibonacciNumber);
    let a = 1
    let b = 1

    if(validatedNthFibonacciNumber === 1){
        return a;
    }
    else if(validatedNthFibonacciNumber === 2){
        return b;
    }
    else if(validatedNthFibonacciNumber === 0){
        return 0;
    }
    else if(validatedNthFibonacciNumber < 1){
        return "OOPS";
    }

    let i = 2;
    do{
        c = a + b
        a = b;
        b = c;
        i++;
    }while(i<validatedNthFibonacciNumber);

    return c;

};

// Do not edit below this line
module.exports = fibonacci;
