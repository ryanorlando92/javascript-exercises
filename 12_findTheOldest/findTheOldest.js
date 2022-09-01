const findTheOldest = function(array) {
    const output = array.reduce((oldest, nextPerson) => {
        const a = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const b = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
        return (a > b) ? oldest : nextPerson;
        });
    return output;
}


//getAge function so we dont destroy the original data
function getAge(birth, death) {
if (!death) {
    death = new Date().getFullYear();
}
return death - birth;
}
   
      
   
   // this code adds a deathyear to the original data, altering it. this wont work
    /*  const oldest = array.sort( (a, b) => {
        const currentYear = new Date().getFullYear();
        if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
            a.yearOfDeath = currentYear;
            b.yearOfDeath = currentYear;
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
       
        return (lastGuy > nextGuy) ? -1 : 1;
    });
    return oldest[0]; */



// Do not edit below this line
module.exports = findTheOldest;
