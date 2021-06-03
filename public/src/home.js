// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//helper funtion that returns the first 5 elements of a given array
function sliceToFive(array) {
  return array.slice(0, 5)
}

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const result = books.reduce((acc, book) => {
    if (book.borrows[0].returned === false) {
      acc +=1
    }
    return acc
  }, 0)
  return result
}


function getMostCommonGenres(books){
  let mostCommon = []
  for (let book of books){
    const genre = mostCommon.find((mostCommon) => mostCommon.name === book.genre)
  if (genre) {
    genre.count++
  }
  else {
    mostCommon.push({name: book.genre, count: 1})
  }
  }
  let result = mostCommon.sort((countA, countB) => countA.count < countB.count ? 1 : -1)
  return sliceToFive(result)
}

function getMostPopularBooks(books) {
  let mostPopular = []
  for (let book of books) {
    const bookTitle = mostPopular.find((book) => book.name === book.title)
    mostPopular.push({name: book.title, count: book.borrows.length})
  }
  let result = mostPopular.sort((countA, countB) => countA.count < countB.count ? 1 : -1)
  return sliceToFive(result)
}

function getMostPopularAuthors(books, authors) {
  //create empty array for most popular authors
  let mostPopularAuthors = []
  //loop through the authors array and push a new object to the mostPopularAuthors array
  for (let author of authors) {
  //include id in the object even though we won't need it in the final array so that we can match to authorId in books array
    mostPopularAuthors.push({name: `${author.name.first} ${author.name.last}`, count: 0, id: author.id})
  }
  //loop through the books array 
  for (let book of books) {
  //find the book object that matches each author in the mostPopularAuthors array
    const matchingAuthor = mostPopularAuthors.find((author) => author.id === book.authorId)
  //add the count of how many times the book has been borrowed  
    matchingAuthor.count += book.borrows.length
  }
  //sort the array by count
  const sortedArray = mostPopularAuthors.sort((authorA, authorB) => authorB.count - authorA.count)
  //map the array to include only the information required
  const sortedAndMapped = sortedArray.map(({id, ...rest}) => rest)
  //return the first 5 items in the array
  return sliceToFive(sortedAndMapped)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
