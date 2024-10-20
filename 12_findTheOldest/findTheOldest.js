const findTheOldest = function(people) {
    let eldest={};
    let eldestAge=0;

    //filter out without yearofdeath
    const withoutYearOfDeath=people.filter((person)=>{
        return person.yearOfDeath===undefined;
    })
    people.map( (person)=>{
        if ('yearOfDeath' in person){
            finalAge=person.yearOfDeath-person.yearOfBirth;
            if (finalAge>eldestAge){ 
                eldestAge=finalAge;
                eldest=person;
            }
        }
    })
    //if year of death is undefined select the one with the oldest
    //date of birth compared with the eldest so far
    withoutYearOfDeath.map((person)=>{
        if (person.yearOfBirth<eldest.yearOfBirth){
            eldest=person;
        }
    })
    return eldest;

};

// Do not edit below this line
module.exports = findTheOldest;
