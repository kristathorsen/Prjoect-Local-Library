// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return result
}

function getTotalNumberOfBorrows(account, books) {
//start counter  
  let total = 0
//loop through books array  
  for (let i = 0; i < books.length; i++){
//destructure variables
const book = books[i]
const borrowed = book.borrows
//filter books array to those that have a matching id
    let matches = borrowed.filter((book) => book.id === account.id)
//if the filtered array length is greater than 0, add 1 to the counter    
    if (matches.length > 0){
      total ++
    }    
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
//filter the array of books by all books that have been checked out by the given account id
 let booksCheckedOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id)
 //embed the author object into the book object
 let result = booksCheckedOut.map((book) => ({...book, author: authors.find(author => author.id === book.authorId)}))
 //return the array of objects
 return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
