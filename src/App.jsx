// import React from 'react'; // Optional in React 18, required in React 17 or earlier
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home ";
import About from "./pages/About ";
import Projects from "./pages/Projects ";
import Contact from "./pages/Contact ";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/about" element ={<About/>} />
          <Route path="/projects" element ={<Projects/>} />
          <Route path="/contact" element ={<Contact/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;