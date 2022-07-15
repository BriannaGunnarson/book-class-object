import {Book} from "../book.js";
//const Book = require('book.js');
/*I want to create multiple books using a class from my book.js file.
The first one is listed below.*/

const harryPotter = new Book(
    "Harry Potter",
    "J. K. Rowling",
    500
    );
    
    console.log(harryPotter);

//Problem: the object harryPotter is not showing up in the console. 
//I suspect a syntex issue with the import language, but I am not sure. 