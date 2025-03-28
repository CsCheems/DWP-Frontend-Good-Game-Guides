import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import Contact from './Pages/Contact/Contact';
import InidiceGuias from './Pages/Guias/IndiceGuias';
import IndiceForo from './Pages/Foro/IndiceForo';


const AppRoutes = () => {
    return(
        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/perfil' element={<User/>}/>
                <Route path='/guias' element={<InidiceGuias/>}/>
                <Route path='/foro' element={<IndiceForo/>}/>
            </Routes>
    );
}

export default AppRoutes;
