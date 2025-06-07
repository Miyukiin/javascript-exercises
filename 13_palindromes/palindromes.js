const palindromes = function (string) {
    function isAlphabetic(str) {
        return /^[A-Za-z0-9]+$/.test(str);
    }
    let reversedStringArray = string.split("").reverse();

    let reversedStringArrayIsAlphabetic = reversedStringArray.filter((element)=> {return isAlphabetic(element)});

    let reversedStringArrayIsLowerCase = reversedStringArrayIsAlphabetic.map(element => element.toLowerCase());

    let reversedFinalStringArray = reversedStringArrayIsLowerCase.join("")

    if (reversedFinalStringArray.split("").reverse().join("") === reversedFinalStringArray){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
