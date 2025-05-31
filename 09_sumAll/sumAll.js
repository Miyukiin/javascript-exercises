const sumAll = function(startNum, endNum) {
    let total = 0;
    if(startNum < 0 || endNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum)) return('ERROR');
    if(startNum > endNum) [endNum, startNum] = [startNum, endNum];

    for(let i=startNum;i<=endNum;i++){
        total +=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
