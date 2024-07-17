const myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;

  const author = document.querySelector("#author").value;

  const page = document.querySelector("#page").value;

  const read = document.querySelector(".readCheck:checked").value;

  const newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  console.log("You have clicked submit.");
  addBookToLibrary();
  event.preventDefault();
  console.log(myLibrary);
});
