const repeatString = function(string, num) {
    let string1 = '';
    if (num < 0) return 'ERROR';
    for (let i = 0; i < num; i++) {
        string1 += string;
    }
    return string1;
};

// Do not edit below this line
module.exports = repeatString;
