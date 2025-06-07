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

// Map to names
function mapToNames(){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [ john, pete, mary ];

    let names = users.map((item) => item.name);

    console.log( names ); // John, Pete, Mary
}

// Map to objects
function mapToObjects(){
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let usersMapped = users.map((item) => ({"fullName": item.name + " " + item.surname, "id": item.id})); 

    /*
    usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
    ]
    */

    console.log( usersMapped[0].id ) // 1
    console.log( usersMapped[0].fullName ) // John Smith
}

function sortByAge(users){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];

    arr.sort((a,b) => a.age - b.age);

    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete
}

function getAverageAge(users){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    let averageAge = arr.reduce((acc,currentValue) => (acc + currentValue.age / 3), 0)

    console.log( averageAge ); // (25 + 30 + 29) / 3 = 28
}

function groupById(arr){
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = users.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})

    console.log(usersById);
    /*
    // after the call we should have:

    usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */
}
groupById();
