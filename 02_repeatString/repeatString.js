const repeatString = function(str, num) {
    if (num < 0){
        result = "ERROR";
    } else {
        result = ""
        for (let i = 0; i < num; i++){
            result += str
        }
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
