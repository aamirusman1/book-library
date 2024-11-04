import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BooksContext } from "../BooksContext";

export default function Books() {
  const books = useContext(BooksContext);

  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || "";

  //   useEffect(() => {
  //     console.log(query);
  //     console.log(search);
  //   });

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

//useLocation -> grants access to the curren url including all of the parameters
//Basically they are current url
//e.g request - http://localhost:3000/?search=kill
