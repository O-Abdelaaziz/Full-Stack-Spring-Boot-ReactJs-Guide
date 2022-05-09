import React from 'react';
import NavBar from "./components/Layout/NavBar";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import './App.css';

function App() {
  return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Footer />
      </React.Fragment>
  );
}

export default App;
