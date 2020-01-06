const fs = require('fs');

const book = {
    title: "Harry Potter",
    author: "J K Rowling"
}

const bookJSON = JSON.stringify(book);
console.log(book);
console.log(bookJSON);

// const bookParsed = JSON.parse(bookJSON);
// console.log(bookParsed);
// console.log(bookParsed.title);
// console.log(bookParsed.author);

fs.writeFileSync("myBooks.json", bookJSON);
const dataBuffer = fs.readFileSync("myBooks.json");
const data = dataBuffer.toString();
console.log(dataBuffer);
console.log(data);

const parsedData = JSON.parse(data);
console.log(parsedData);
