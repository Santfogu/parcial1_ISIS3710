import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/login'
import ListaLibros from './components/listaLibros/listaLibros';
import './App.css';


function App() { 
  return (
  <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/libros" element={<ListaLibros />} />
         
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
