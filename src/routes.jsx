import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import Contact from './Pages/Contact/Contact';
import InidiceGuias from './Pages/Guias/IndiceGuias';
import IndiceForo from './Pages/Foro/IndiceForo';
import Juego from './Pages/Juego/Juego';
import RutaPrivada from './Components/RutaPrivada/RutaPrivada';



const AppRoutes = () => {
    return(
        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacto' element={<Contact/>}/>
                <Route path='/perfil' element={<RutaPrivada element = { <User/>} />}/>
                <Route path='/guias' element={<InidiceGuias/>}/>
                <Route path='/foro' element={<IndiceForo/>}/>
                <Route path="/juego/:id" element={<Juego />} />
            </Routes>
    );
}

export default AppRoutes;
