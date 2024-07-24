import { useState } from 'react'
import './App.css'
import Home from './page/home/Home.jsx';
import Navbar from './navbar/Navbar.jsx';
import Selection from './navbar/Selection.jsx';
import Footer from './footer/Footer.jsx';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <>
        <Navbar />
        <Home />
      </>
    )
  }

export default App
