class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


document.getElementById("confirm").addEventListener("click", ()=> {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = read()
    let book = new Book(title, author, pages, read);
    console.log(book);
})

function read() {
    if (document.getElementById('r1y').checked) {
        return true;
    } else {
        return false;
    }
}