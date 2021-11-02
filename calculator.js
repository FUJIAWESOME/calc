function calc (a, b, operator) {
    const isNotValid = (isNan(a) || isNaN(b));
    if (isNotValid){
        return "Error";
    }

    if (operator === "multi"){
        return a * b;
    } else if (operator === "pow"){
        return a ** b;
    } else if (operator === "sum"){
        return a + b;
    } else if (operator === "div"){
        return a / b;
    } else if (operator === "rem"){
        return a % b;
    } else if (operator === "sub"){
        return a - b;
    }
    
    return "unknown operation";
}

console.log(calc(0, 3, "sum"))

