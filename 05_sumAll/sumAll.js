const sumAll = function(startNum, endNum) {
    if ((typeof startNum != 'number') || (typeof endNum != 'number')) return "ERROR";
    if (startNum < 0 || endNum < 0) return "ERROR";
    
    let sum = 0;
    if (startNum > endNum) {
        for (i = endNum; i <= startNum; i++) {
            sum += i;
        }
    }

    for (i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

