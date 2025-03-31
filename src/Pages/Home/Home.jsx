import React, { useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { Container, Grid, Typography } from '@mui/material';
import SidebarCategorias from '../../Layouts/Sidebar/Sidebar-categorias';
import { obtenerGeneroPorId, obtenerJuegos } from '../../servicios/RawgAPI';
import Banner from '../../Components/Banner/Banner';
import GuiasPopulares from '../../Components/GuiasPopulares/GuiasPopulares';
import ListaGenero from '../../Components/ListaGenero/ListaGenero';

const Home = () => {

  const [listaJuegos, setListaJuegos] = useState();
  const [listaJuegosPorGenero, setListaJuegosPorGenero]=useState([]);
  const [nombreGenero, setNombreGenero]=useState('Action');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 21));

  useEffect(() => {
      obtenerListaJuegos();
      obtenerListaPorGenero(4);
    }, []);

  const obtenerListaJuegos = () => {
    obtenerJuegos.then((resp) => {
      setListaJuegos(resp.data.results);
    });
  };

  const obtenerListaPorGenero = (id) => {
    obtenerGeneroPorId(id).then((resp) => {
      setListaJuegosPorGenero(resp.data.results);
    })
  }

  return (
    
      <div className="home-container">
      <Navbar/>
      <Container sx={{marginTop:"75px"}}>
        <Grid  container spacing={2}>
          <Grid item xs={3}>
            <SidebarCategorias 
            generoId={(generoId)=>obtenerListaPorGenero(generoId)}
            nombreGenero={(name)=>setNombreGenero(name)}
            />
          </Grid >
          <Grid item xs={9} >
            {listaJuegos?.length>0?
            <>
            <Banner juegoBanner={listaJuegos[randomNumber]} randomNumber={randomNumber}/>
            <GuiasPopulares guiasPopulares={listaJuegos}/>
            <ListaGenero 
              listaJuegosPorGenero={listaJuegosPorGenero}
              nombreGenero={nombreGenero}
            />
            </>
            :null}
          </Grid >
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

