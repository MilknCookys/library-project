const myLibrary = [];
let bookIdentifier = 0;

function generateBookId() {
  return bookIdentifier++;
}

function Book(title, author, page, read) {
  this.id = generateBookId();

  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;

  this.displayed = false;
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;

  const author = document.querySelector("#author").value;

  const page = document.querySelector("#page").value;

  const read =
    document.querySelector(".readCheck:checked").value === "true"
      ? true
      : false;

  const newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);

  const form = document.querySelector("form");
  form.reset();
}

function renderLibrary(library) {
  const libraryContainer = document.querySelector("#libraryContainer");
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].displayed === true) {
      continue;
    } else {
      const libraryCard = document.createElement("div");
      libraryCard.setAttribute("data-id", myLibrary[i].id);
      libraryContainer.appendChild(libraryCard);

      const titleDisplay = document.createElement("p");
      const authorDisplay = document.createElement("p");
      const pageDisplay = document.createElement("p");
      const readDisplay = document.createElement("p");
      readDisplay.className = "readDisplay";
      const readButton = document.createElement("button");
      const removeButton = document.createElement("button");

      titleDisplay.textContent = `Title: ${myLibrary[i].title}`;
      authorDisplay.textContent = `Author: ${myLibrary[i].author}`;
      pageDisplay.textContent = `Page: ${myLibrary[i].page}`;

      if (myLibrary[i].read === false) {
        readDisplay.textContent = `Read: No`;
      } else {
        readDisplay.textContent = `Read: Yes`;
      }
      readButton.textContent = "Read";
      readButton.addEventListener("click", onClickReadButton);

      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", onClickRemoveButton);

      libraryCard.appendChild(titleDisplay);
      libraryCard.appendChild(authorDisplay);
      libraryCard.appendChild(pageDisplay);
      libraryCard.appendChild(readDisplay);
      libraryCard.appendChild(readButton);
      libraryCard.appendChild(removeButton);

      myLibrary[i].displayed = true;
    }
  }
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  console.log("You have clicked submit.");
  addBookToLibrary();
  event.preventDefault();
  console.log(myLibrary);
  renderLibrary(myLibrary);
});

function onClickReadButton(event) {
  const libraryCard = event.target.parentElement;
  const readDisplay = libraryCard.querySelector(".readDisplay");
  const bookId = Number(libraryCard.getAttribute("data-id"));
  const bookIndex = getBookIndex(bookId);
  if (bookIndex !== -1) {
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
    readDisplay.textContent = myLibrary[bookIndex].read
      ? "Read: Yes"
      : "Read: No";
  }
}

function onClickRemoveButton(event) {
  const libraryCard = event.target.parentElement;
  const bookId = Number(libraryCard.getAttribute("data-id"));

  removeFromLibrary(bookId);

  libraryCard.remove();
}

function removeFromLibrary(bookId) {
  if (getBookIndex(bookId) !== -1) {
    myLibrary.splice(getBookIndex(bookId), 1);
  }
}

/**
 * Return the index of the book with the specified book id in the library.
 *
 * @param {number} bookId The book id of the sought book.
 * @return {number} the index of the book with the specified book id in the library or -1 if no matching book is found.
 */
function getBookIndex(bookId) {
  for (i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === bookId) {
      return i;
    }
  }
  console.log("Could not find book");
  return -1;
}

function renderCard(book) {
  const libraryContainer = document.querySelector("#libraryContainer");
}
