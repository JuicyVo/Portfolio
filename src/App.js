import React, { useState } from 'react';
import Navbar from "./components/NavBar/navbar";
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import handlePageChange from './components/Utility/pageUtils';
import {Projects} from "./components/Projects/projects";

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const changePage = (page) => {
    setCurrentPage(page);
  };




  return (
    <div className="App">
      <div> <Navbar setCurrentPage={setCurrentPage} /> </div>
      {currentPage === 'home' && <Home />}
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'contact' && <Contact />}

    </div>
  );
}

export default App;
