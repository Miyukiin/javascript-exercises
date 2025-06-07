const getTheTitles = function(arrOfObjects) {
    const titles = arrOfObjects.reduce(
        (acc, item) => {
            acc.push(item.title);
            return acc; 
        }, []);
    
    return titles;
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

// Do not edit below this line
module.exports = getTheTitles;
