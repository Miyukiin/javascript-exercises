const removeFromArray = function(array) {
    let itemsToBeRemoved = [...arguments]
    itemsToBeRemoved.splice(0,1);
    itemsToBeRemoved.forEach((itemToBeRemoved)=> {while(array.includes(itemToBeRemoved)) array.splice(array.indexOf(itemToBeRemoved), 1)});
    return array;
    
};
console.log(removeFromArray([1,2,3,3,4,5],3,4,5));
// Do not edit below this line
module.exports = removeFromArray;
