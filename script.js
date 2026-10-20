const myLibrary = [];

function Book(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
}

function addBookToLibrary() {
    // take params, create a book then store it in the array
}

const submitBtn = document.querySelector('.submit-book')
const modalDialog = document.querySelector('.form')
const closeBtn = document.querySelector('.close-modal-button');

submitBtn.addEventListener("click", function () {
    modalDialog.showModal();
})

closeBtn.addEventListener("click", function() {
    modalDialog.close()
})


