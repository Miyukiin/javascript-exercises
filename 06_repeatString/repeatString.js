const repeatString = function(string, timesRepeated) {
    if (timesRepeated<0) return "ERROR";
    let repeatedString = "";
    for(let i=0;i<timesRepeated;i++){
        repeatedString += string
    }
    
    return repeatedString;
};


//console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
