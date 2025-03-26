import React, { useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';

import { Container, Grid, Typography } from '@mui/material';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { obtenerJuegos } from '../../servicios/RawgAPI';
import Banner from '../../Components/Banner/Banner';
//import "./Home.css";


const Home = () => {

  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
      obtenerListaJuegos();
    }, []);

  const obtenerListaJuegos = () => {
    obtenerJuegos.then((resp) => {
      console.log(resp.data.results);
      setListaJuegos(resp.data.results);
    });
  };

  return (
    
      <div className="home-container">
      <Navbar/>
      <Container sx={{marginTop:"75px"}}>
        <Grid  container spacing={2}>
          <Grid item xs={4}>
            <Sidebar/>
          </Grid >
          <Grid item xs={8} >
            {listaJuegos?.length>0?<Banner juegoBanner={listaJuegos[0]}/>
            :null}
          </Grid >
        </Grid>
      </Container>
      
    
    

      
      
    </div>
  );
};

export default Home;


/*
<Container className="home-content">
      <Typography variant="h4" className="home-title1">
          Guías Más Valoradas
        </Typography>
        <Slider {...settings} className="home-carousel">
          {topGuides.map((guide) => (
            <div key={guide.id} className="home-card">
              <img className="home-card-media" src={guide.image} alt={guide.title} />
              <div className="home-card-content">
                <Typography variant="h6" noWrap>{guide.title}</Typography>
              </div>
            </div>
          ))}
        </Slider>

        <Typography variant="h4" className="home-title2">
          Guías Mas Recientes
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {topGuides.map((guide) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={guide.id}>
              <div className="home-card">
                <img className="home-card-media" src={guide.image} alt={guide.title} />
                <div className="home-card-content">
                  <Typography variant="h6" noWrap>{guide.title}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    */