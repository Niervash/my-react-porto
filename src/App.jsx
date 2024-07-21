import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rumah from './page/home/Home.jsx';
import Navbar from './navbar/Navbar.jsx';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <>
        <Navbar />
        <Rumah />
        
      </>
    )
  }

export default App
