console.log("Script running");
class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function addBook() {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("r1y").checked;

	let newBook = new Book(title, author, pages, read);
	let newDiv = document.createElement("div");
	newDiv.textContent =
		newBook.title +
		" by " +
		newBook.author +
		" with a " +
		newBook.pages +
		" pages  " +
		newBook.read;
	document.getElementById("library").appendChild(newDiv);
}
