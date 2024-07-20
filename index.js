const myLibrary = [];

function Book(title, author, page, read) {
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

function cardDisplay(library) {
  const libraryContainer = document.querySelector("#libraryContainer");
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].displayed === true) {
      continue;
    } else {
      const libraryCard = document.createElement("div");
      libraryCard.setAttribute("data-id", i);
      libraryContainer.appendChild(libraryCard);

      const titleDisplay = document.createElement("p");
      const authorDisplay = document.createElement("p");
      const pageDisplay = document.createElement("p");
      const readDisplay = document.createElement("p");
      const readButton = document.createElement("button");

      titleDisplay.textContent = `Title: ${myLibrary[i].title}`;
      authorDisplay.textContent = `Author: ${myLibrary[i].author}`;
      pageDisplay.textContent = `Page: ${myLibrary[i].page}`;
      if (myLibrary[i].read === false) {
        readDisplay.textContent = `Read: No`;
      } else {
        readDisplay.textContent = `Read: Yes`;
      }
      readButton.textContent = `Read`;

      readButton.addEventListener("click", (event) => {
        console.log(i);
        if (myLibrary[i].read === true) {
          myLibrary[i].read = false;
        } else if (myLibrary[i].read === false) {
          myLibrary[i].read = true;
        }
        console.log(myLibrary[i].read);
        console.log(myLibrary[i]);
        cardDisplay(myLibrary);
      });

      libraryCard.appendChild(titleDisplay);
      libraryCard.appendChild(authorDisplay);
      libraryCard.appendChild(pageDisplay);
      libraryCard.appendChild(readDisplay);
      libraryCard.appendChild(readButton);

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
  cardDisplay(myLibrary);
});
