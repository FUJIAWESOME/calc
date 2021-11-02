function calc (a, b, operator) {
    const isNotValid = (isNaN(a) || a === "" || operator === "" || isNaN(b) || b === "");
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

console.log(calc("", 3, "sum"))

