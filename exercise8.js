const library = {
  name: 'City Library',
  books: [],

  // Add a book to the library
  addBook(title, author, isbn) {
    const book = { title, author, isbn };
    this.books.push(book);
  },

  // Find a book by its title
  findBookByTitle(title) {
    for (const book of this.books) {
      if (book.title === title) return book;
    }
    return null;
  },

  // List all book titles
  listAllBooks() {
    console.log('Books in the library:');
    for (const book of this.books) {
      console.log(`- ${book.title}`);
    }
  }
};

const universityLibrary = Object.create(library);

// Add courses property
universityLibrary.courses = [];

// Add a method to add a course and a book
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
  // Add course
  this.courses.push(courseName);

  // Add book using inherited addBook method
  this.addBook(title, author, isbn);
};

// Search books by author (fixed to use normal function so it works with inheritance)
library.findBooksByAuthor = function(authorName) {
  return this.books.filter(book => book.author === authorName);
};


// Add books directly
universityLibrary.addBook('JavaScript Guide', 'John Doe', '123');
universityLibrary.addBook('CSS Mastery', 'Jane Smith', '456');

// Add a course book
universityLibrary.addCourseBook('Math 101', 'Algebra Basics', 'Alice', '789');

// List all books
universityLibrary.listAllBooks();
// Output:
// Books in the library:
// - JavaScript Guide
// - CSS Mastery
// - Algebra Basics

// Find a book by title
console.log(universityLibrary.findBookByTitle('CSS Mastery'));
// Output: { title: 'CSS Mastery', author: 'Jane Smith', isbn: '456' }

// Search by author
const johnBooks = universityLibrary.findBooksByAuthor('John Doe');
console.log(johnBooks);
/* Output:
[
  { title: 'JavaScript Guide', author: 'John Doe', isbn: '123' }
]
*/

// Check courses
console.log(universityLibrary.courses);
// Output: ['Math 101']
