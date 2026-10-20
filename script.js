const myLibrary = [];

function Book(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
}

function addBookToLibrary(title, author, page, read) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, page, read)
    myLibrary.push(book)
    
}

const addBookBtn = document.querySelector('.add-book-button')
const modalDialog = document.querySelector('.form')
const closeBtn = document.querySelector('.close-modal-button');
const bookForm = document.querySelector('#book-submit-form');

const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pageInput = document.querySelector('#page')
const readInput = document.querySelector('#read')

addBookBtn.addEventListener("click", function () {
    modalDialog.showModal();
})

bookForm.addEventListener("submit", function(event) {
    event.preventDefault()
    addBookToLibrary(titleInput.value, authorInput.value, Number(pageInput.value), readInput.checked)
    modalDialog.close()
})

closeBtn.addEventListener("click", function() {
    modalDialog.close()
})


