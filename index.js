const myLibrary = [];

function book() {}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;

  const author = document.querySelector("#author").value;

  const page = document.querySelector("#page").value;

  const read = document.querySelector(".readCheck:checked").value;

  console.log(title);
  console.log(author);
  console.log(page);
  console.log(read);
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  console.log("You have clicked submit.");
  addBookToLibrary();
  event.preventDefault();
});
