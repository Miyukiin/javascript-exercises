// Translate border-left-width to borderLeftWidth
function camelize(string){
    return string.split("-").map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

// Filter range
function filterRange(arr, a ,b){
    return arr.filter(arr => arr >= a && arr <= b);
}

// Filter range "in place"
function filterRangeInPlace(arr, a ,b){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] < a || arr[i] > b){
            console.log(i);
            arr.splice(i,1);
            i--;
        }
    }
}
// Sort in decreasing order
function sortDecreasingOrder(arr){
    return arr.sort((a,b)=> b-a);
}

// Copy and sort array
function copySorted(arr) {
  return arr.slice().sort();

}

// Shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function countShuffleAppearances(){
    // counts of appearances for all possible permutations
    let count = {
        '123': 0,
        '132': 0,
        '213': 0,
        '231': 0,
        '321': 0,
        '312': 0
    };

    for (let i = 0; i < 1000000; i++) {
        let array = [1, 2, 3];
        shuffle(array);
        count[array.join('')]++;
    }

    // show counts of all possible permutations
    for (let key in count) {
        console.log(`${key}: ${count[key]}`);
    }

}

// Filter unique array members
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

countShuffleAppearances();

//console.log(camelize("-background-color"));