class Book {

    constructor(title, author, page, read) {
        this.id = crypto.randomUUID()
        this.title = title
        this.author = author
        this.page = page
        this.read = read
    }
}


const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 310, true),
    new Book("1984", "George Orwell", 328, false),
    new Book("The Alchemist", "Paulo Coelho", 208, true),
    new Book("Dune", "Frank Herbert", 412, false),
    new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, false),
    new Book("Animal Farm", "George Orwell", 112, true)
];

function addBookToLibrary(title, author, page, read) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, page, read)
    myLibrary.push(book)

}

function renderDisplay(arr) {

    display.textContent = "";

    for (const books of arr) {

        const card = document.createElement('div')
        card.classList.add("book-card");

        const bookIcon = document.createElement('div')
        bookIcon.classList.add("book-icon")

        const title = document.createElement('p')
        title.classList.add("book-title");

        const author = document.createElement('p')
        author.classList.add("book-author");

        const page = document.createElement('p')
        page.classList.add("book-page");

        const read = document.createElement('div')
        read.classList.add("read-box")

        const readLabel = document.createElement('label')
        readLabel.textContent = "Mark as Read: "

        const readToggle = document.createElement('input')
        readToggle.type = "checkbox"
        readToggle.classList.add("book-read-toggle");
        readToggle.checked = books.read;

        readToggle.addEventListener('change', function () {
            books.read = readToggle.checked;
            renderDisplay(arr)
        });

        const removeCard = document.createElement('button')
        removeCard.textContent = "Delete"
        removeCard.dataset.bookId = books.id;
        removeCard.classList.add("book-delete-button")

        removeCard.addEventListener("click", function () {
            const bookIndex = arr.findIndex(function (book) {
                return book.id === removeCard.dataset.bookId
            })

            arr.splice(bookIndex, 1)
            renderDisplay(arr)
        })

        title.textContent = `Title: ${books.title}`
        author.textContent = `Author: ${books.author}`
        page.textContent = `Pages: ${books.page}`

        read.append(readLabel, readToggle)

        card.append(bookIcon, title, author, page, read, removeCard)

        display.append(card)
    }
}

const display = document.querySelector('.content')
const addBookBtn = document.querySelector('.add-book-button')
const modalDialog = document.querySelector('.form')
const closeBtn = document.querySelector('.close-modal-button');
const bookForm = document.querySelector('#book-submit-form');

const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pageInput = document.querySelector('#page')
const readInput = document.querySelector('#read')

renderDisplay(myLibrary)

addBookBtn.addEventListener("click", function () {
    modalDialog.showModal();
})

bookForm.addEventListener("submit", function (event) {
    event.preventDefault()
    addBookToLibrary(titleInput.value, authorInput.value, Number(pageInput.value), readInput.checked)
    modalDialog.close()
    renderDisplay(myLibrary)
    bookForm.reset();
})

closeBtn.addEventListener("click", function () {
    modalDialog.close()
})


