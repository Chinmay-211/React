import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//updatenpm
function App() {
  const [mode, setmode] = useState('light');
  const [text, setText] = useState('black');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togle = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "Success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "Success");
    }
  }

  const textTogel = () => {
    if (text === 'white') {
      setText('black');
    } else {
      setText('white');
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} togle={togle} text={textTogel} />
        <Alert alert={alert} />
        <div className="container">
          <switch>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter text" mode={mode} showAlert={showAlert} />} />
          </Routes>
          </switch>
          
        </div>
      </Router>
    </>
  );
}

export default App;
