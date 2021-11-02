function calc (a, b, operator) {
    const isNotValid = (isNaN(a) || a === "" || operator === "" || isNaN(b) || b === "");
    if (isNotValid){
        return "Error";
    }
    switch(operator) {
        case "sum":
            console.log(+a + +b); 
            break;
        case "pow": 
            console.log((+a) ** +b); 
            break;
        case "div": 
            console.log(+a / +b); 
            break;
        case "multi": 
            console.log(+a * +b); 
            break;
        case "rem": 
            console.log(+a % +b); 
            break;
        case "sub": 
            console.log(+a - +b); 
            break;
        default: 
            console.log("unknown operation");
    }
}
calc("2", "4", "pow")
