import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import Contact from './Pages/Contact/Contact';
import InidiceGuias from './Pages/Guias/IndiceGuias';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/perfil' element={<User/>}/>
                <Route path='/guias' element={<InidiceGuias/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
