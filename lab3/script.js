let books = [];


function addBook() {

    let book =
        document.getElementById("book").value;

    if (book == "") {

        alert("Please enter a book title.");

        return;
    }

    if (books.length == 3) {

        alert("You can borrow a maximum of 3 books.");

        return;
    }

    books.push(book);

    //to clear the textbox after the book has been added to the array.
    document.getElementById("book").value = "";

    alert("Book Added");

}



function confirmBorrow() {

    let name =
        document.getElementById("studentName").value;

    if (name == "") {

        alert("Please enter your name.");

        return;
    }

    if (books.length == 0) {

        alert("Please add at least one book.");

        return;
    }

    localStorage.setItem("name", name);

    localStorage.setItem(
        "books",
        JSON.stringify(books)
    );

    window.location.href = "receipt.html";

}