import React from 'react';
import NavBar from "./components/Layout/NavBar";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Books from "./components/Books/Books";
import BookDetails from "./components/BookDetails/BookDetails";
import NewBook from "./components/Book/NewBook/NewBook";
import EditBook from "./components/Book/EditBook/EditBook";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Header />
          <Routes>
              <Route path="/" element={<Navigate to="/books" />} />
              <Route path="/books/*" element={<Books />} />
              <Route path="/books/:bookIsbn" element={<BookDetails />} />
              <Route path="/books/:bookIsbn/edit" element={<EditBook />} />
              <Route path="/new-book" element={<NewBook />} />
          </Routes>
          <Footer />
      </React.Fragment>
  );
}

export default App;
