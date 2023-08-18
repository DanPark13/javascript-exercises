const sumAll = function(num1, num2) {
    if ((num1 || num2) < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    } else {
        let result = 0
        if (num1 > num2){
            temp = num1
            num1 = num2
            num2 = temp
        }
        for (let i = num1; i <= num2; i++){
            result += i;
        }
        return result
    }
};

// Do not edit below this line
module.exports = sumAll;
