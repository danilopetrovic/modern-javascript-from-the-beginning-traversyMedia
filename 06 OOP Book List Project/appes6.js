class Book {
// Book Constructor
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Constructor
class UI {
// Add Book To List
    addBookToList(book) {
        const list = document.querySelector('.book-list');
        // create element
        const row = `<tr>
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
</tr>`;
        list.insertAdjacentHTML('beforeend', row);
    };

// Show Alert
    showAlert(message, className) {
        // Create div
        const div = `<div class="popUpDiv ${className}">${message}</div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', div);
        setTimeout(function () {
            document.querySelector('.popUpDiv').remove()
        }, 2000)
    };

// Delete Book
    deleteBook(target) {
        // console.log(target);
        if (target.className === 'delete') {
            target.closest('tr').remove();
        }
    };

// Clear input Fields
    clearFields() {
        // Get form values
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };
}


// Event listener for Book Form
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Instatiate book object
    const book = new Book(title, author, isbn);

    // Instatiate UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields!', 'error');
        return;
    }

    // Call Function Add Book To List
    ui.addBookToList(book)

    // Show Alert for successful insert
    ui.showAlert('Book Added!', 'success');

    // Clear input fields
    ui.clearFields();
});

// Event listener for delete
document.querySelector('.book-list').addEventListener('click', function (e) {
    e.preventDefault();

    // Instantiate UI
    const ui = new UI();

    // Delete book from DOM
    ui.deleteBook(e.target);

    // Show message of removed book
    ui.showAlert('Book removed', 'success')
});