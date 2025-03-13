import React from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../../Layouts/Navbar/Navbar';
import GuiaLista from '../../Components/Guia/GuiaLista';
import './IndiceGuias.css';

const guias = [
  { 
    id: 1, 
    title: "Guía de Elden Ring", 
    category: "RPG", 
    date: "15/03/2025", 
    image: "https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg",
    link: "/guides/elden-ring"
  },
  { 
    id: 2, 
    title: "Guía de The Witcher 3", 
    category: "RPG", 
    date: "10/03/2025", 
    image: "https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg",
    link: "/guides/witcher-3"
  },
  { 
    id: 3, 
    title: "Guía de Minecraft", 
    category: "Sandbox", 
    date: "05/03/2025", 
    image: "https://i.pinimg.com/474x/55/c6/d7/55c6d740a19d9ae2dbe8a05b107bab55.jpg",
    link: "/guides/minecraft"
  },
  { 
    id: 4, 
    title: "Guía de Age of Empires II", 
    category: "Estrategia", 
    date: "02/03/2025", 
    image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg",
    link: "/guides/aoe2"
  },
];

const IndiceGuias = () => {
  return (
    <>
      <Navbar/>
      <Container className="guias-container">
        <Typography variant="h4" className="guias-title">Índice de Guías</Typography>
        <GuiaLista guias={guias} />
      </Container>
    </>
  );
};

export default IndiceGuias;
