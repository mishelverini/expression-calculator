function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    if (expr.length == 0) {
        return 0;
    }
    let operator = expr.match(/\W/g).join('').trim().match(/\S/g);
    let opRand = expr.split(/[+ - * /]/g).filter(function(element){
        return element !== '';
    });
    let count = 0;
    let res = 0;
    function calc(operator, num1, num2) {
        num1 = Number.parseFloat(num1);
        num2 = Number.parseFloat(num2);
        switch(operator) {
            case '+':
            return num1 + num2;
            break;
            case '-':
            return num1 - num2;
            break;
            case '*':
            return num1 * num2;
            break;
            case '/':
            return num1 / num2;
            break;
        }
    }
    for( let i = 0; i < opRand.length - 1; i++ ) {
        if (count == 0) {
            if(operator[i] == '/' && opRand[i] == 0 || opRand[i + 1] == 0) {
                throw new Error("TypeError: Division by zero.");
            }
            res += calc(operator[i], opRand[i], opRand[i + 1]);
            count++;
        } else {
            if(operator[i] == '/' && res == 0 || opRand[i + 1] == 0) {
                throw new Error("TypeError: Division by zero.");
            }
            res = calc(operator[i], res, opRand[i + 1]);
        }
    }
    return Number.parseFloat(res.toFixed(4));
}

module.exports = {
    expressionCalculator
}