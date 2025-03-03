import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Layouts/Navbar/navbar';
import Home from './Pages/Home';
import Contacto from './Pages/Contact';
import User from './Pages/User';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/perfil" element={ <User/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;