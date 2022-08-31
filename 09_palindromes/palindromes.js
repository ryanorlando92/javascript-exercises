const palindromes = function (string) {
    const noPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const noSpaces = noPunctuation.replace(/\s{1,}/g,"");
    const finalString = noSpaces.toUpperCase();

    let output = '';
    for (let i = (finalString.length - 1); i >= 0; i--) {
        output += finalString[i];
    }

    return (output === finalString);

};


// Do not edit below this line
module.exports = palindromes;
