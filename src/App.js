import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import './App.css';
import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const addalert = (type, msg) => {

    setalert({
      type: type,
      message: msg
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const changemode = () => {

    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      addalert("danger", "You Have  SuccessFully Change Dark mode");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      addalert("danger", "You Have  SuccessFully Change light mode");

    }

  }
  return (
    <BrowserRouter>
    <>
      <Navbar title="TextTile@.Com" about="About Us" changemode={changemode} mode={mode} addlert={addalert} />
      <Alert alert={alert} />
     
    
    
    <Switch>

<Route exact path="/about">
  
  <AboutUs/>
  </Route>

  <Route exact path="/home">
  
  <TextForm title="Enter Text To Do operations" mode={mode} addalert={addalert} />
  </Route>

    </Switch>
    
    
    
    </>

    </BrowserRouter>
    
  );
}

export default App;