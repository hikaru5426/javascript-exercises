const findTheOldest = function (people) {
    let now = new Date();
    let oldestPersonAge;
    let currentPersonAge;
    let oldestPerson = {
        name: "",
        yearOfBirth: 0,
        yearOfDeath: 0,
    };

    for (let person of people) {
        
        if (person.yearOfDeath === undefined) {
            currentPersonAge = now.getFullYear() - person.yearOfBirth;
        } else {
            currentPersonAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (oldestPerson.yearOfDeath === undefined) {
            oldestPersonAge = now.getFullYear() - oldestPerson.yearOfBirth;
        } else {
            oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        }

        if (currentPersonAge > oldestPersonAge) {
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
