// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];
const firstBook = document.getElementById("firstBookDiv");
const secondBook = document.getElementById("secondBookDiv");
const thirdBook = document.getElementById("thirdBookDiv");

firstBook.textContent = books[0].title + " by " + books[0].author;
const firstBookImage = document.createElement("img");
firstBookImage.src = books[0].bookCoverImage;
firstBookImage.alt = "The design of Everyday Things Book Image";
firstBook.appendChild(firstBookImage);
firstBookImage.width = 50;
firstBookImage.height = 50;

secondBook.textContent = books[1].title + " by " + books[1].author;
const secondBookImage = document.createElement("img");
secondBookImage.src = books[1].bookCoverImage;
secondBookImage.alt = "The Most Human Human  Book Image";
secondBook.appendChild(secondBookImage);
secondBookImage.width = 50;
secondBookImage.height = 50;

thirdBook.textContent = books[2].title + " by " + books[2].author;
const thirdBookImage = document.createElement("img");
thirdBookImage.src = books[2].bookCoverImage;
secondBookImage.alt = "The Pragmatic Programmer Book Image";
thirdBook.appendChild(thirdBookImage);
thirdBookImage.width = 50;
thirdBookImage.height = 50;
if (books[0].alreadyRead == true) {
  firstBook.style.backgroundColor = "green";
} else {
  firstBook.style.backgroundColor = "red";
}
if (books[1].alreadyRead == true) {
  secondBook.style.backgroundColor = "green";
} else {
  firstBook.style.backgroundColor = "red";
}
if (books[2].alreadyRead == true) {
  thirdBook.style.backgroundColor = "green";
} else {
  thirdBook.style.backgroundColor = "red";
}


