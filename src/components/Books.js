import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BooksContext } from "../BooksContext";

export default function Books() {
  const books = useContext(BooksContext);

  // const query = new URLSearchParams(useLocation().search);
  // const search = query.get("search") || "";

  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || "";
  const author = query.get("author") || "";

  useEffect(() => {
    //http://localhost:3000/?search=kill
    // console.log("query is: " + query); // search=kill
    // console.log("search is: " + search); //kill

    //http://localhost:3000/?search=kill&author=Lee
    console.log("query is: " + query); // search=kill&author=Lee
    console.log("search is: " + search); //kill
    console.log("author is: " + author); //Lee
  });

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLocaleLowerCase()) &&
      b.author.toLowerCase().includes(author.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            Title : {book.title} <br></br>
            Author : {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

//useLocation -> grants access to the curren url including all of the parameters
//Basically they are current url
//e.g request - http://localhost:3000/?search=kill
