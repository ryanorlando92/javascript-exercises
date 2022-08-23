const leapYears = function(year) {
    if ( year.toString().slice(-2) == '00') {
        return !(year % 400);
    }
    return !(year % 4) 
};

// Do not edit below this line
module.exports = leapYears;
