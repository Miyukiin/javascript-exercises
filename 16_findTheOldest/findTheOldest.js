const findTheOldest = function(arrOfObjects) {
    const arrOfObjectsWithAge = arrOfObjects.map(
        (item) => { return item.yearOfDeath === undefined ? 
            {...item, "age": parseInt(new Date().getFullYear()) - item.yearOfBirth}
            : {...item, "age": item.yearOfDeath - item.yearOfBirth}
        }
    )
        .sort((a,b) => b.age - a.age);
    arrOfObjectsWithAge;
    return arrOfObjectsWithAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
