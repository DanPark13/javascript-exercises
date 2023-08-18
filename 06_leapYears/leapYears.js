const leapYears = function(year) {
    // If divisible by 100 and 400, then must be divisible by 4
    // If divisible by 400, then must be divisible by 100
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
};

// Do not edit below this line
module.exports = leapYears;
