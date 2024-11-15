import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route
            path="/secret"
            element={
              <PrivateRoute
                Component={<SecretBooks></SecretBooks>}
              ></PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
//Navigate is used for Router redirection
//* means all routes other than defined above
//Query parameter is separated with a ? in the url
//myapp.com/users/100 OR myapp.com/users?lastname=doe&firstname=john
//We use private route so that only authentic users can access a specific url
