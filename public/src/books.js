// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
let result = authors.find((author) => author.id === id)
 return result
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let booksOut = books.filter((book) =>  book.borrows[0].returned === true)
  let booksIn = books.filter((book) => book.borrows[0].returned === false)
  return [booksIn, booksOut]
  
}

//returns an array of all the transactions from the book's bororows key
//each object in the array should have the books.borrows object and the account object
function getBorrowersForBook(book, accounts) {
let borrowed = book.borrows
let result = borrowed.map((borrow) => {
  let account = findAuthorById(accounts, borrow.id)
  account.returned = borrow.returned
  return account
})
return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
