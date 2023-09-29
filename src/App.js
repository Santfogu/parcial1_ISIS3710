import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/login'
import ListaCafes from './components/listaCafes/listaCafes';
import './App.css';
import logo from './logo.svg'



function App() { 
  return (
  <div className="App">
    <div className="App-header">
      <h3 className="nombreComp">El aroma mágico</h3>
      <img src={logo} alt="Logo de la compañía" classname="logo"/>
    </div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cafes" element={<ListaCafes />} />
         
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
