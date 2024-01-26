import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Textform from './component/Textform';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Analyzer" mode={mode} changeMode={changeMode} />
        <div className="container my-2">
          <Routes>
          <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter the Text to Analyze:" mode={mode}/>}>
            </Route>
          </Routes>
  
        </div>
      </Router>
    </>
  );
}

export default App;
