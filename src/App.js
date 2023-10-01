import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/login'
import ListaCafes from './components/listaCafes/listaCafes';
import './App.css';
import { IntlProvider } from 'react-intl';


import esMessages from './locales/es';
import enMessages from './locales/en';

function App() { 

  const userLanguage = navigator.language || navigator.userLanguage;
  const messages = userLanguage.startsWith('es') ? esMessages : enMessages;

  
  return (
  <IntlProvider locale={userLanguage} messages={messages}>
  <div className="App">
    <div className="App-header">
      <p className="nombreComp">El aroma mágico</p>
      <hr></hr>
      <img src={'https://i.postimg.cc/15pd7yMd/fotoCafe.png'} alt="Logo de la compañía" className="logo"/>
      <hr></hr>
    </div>
    <div className='cuerpo'>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cafes" element={<ListaCafes />} />
         
       </Routes>
     </BrowserRouter>
    </div>
    <div className='footer'>
        Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
    </div>

   </div>
    </IntlProvider>
  );
}

export default App;
