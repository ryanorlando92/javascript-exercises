const removeFromArray = function(arr, ...theArgs) {
    for (i = 0; i < arr.length; i++) {

        let a = 0;
        while (a < theArgs.length) {

            if (arr[i] === theArgs[a]) {
                arr.splice(i, 1);
                i = -1;
            }

        a++;
        }    
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

/*

...theArgs are stored as array too. so have to compare each element to to each
*/