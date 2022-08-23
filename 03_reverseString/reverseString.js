const reverseString = function(string) {
    let output = '';
    for (let i = (string.length - 1); i >= 0; i--) {
        output += string[i]; // if i use string.charAt(i) i wouldnt need to use string.length - 1
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
