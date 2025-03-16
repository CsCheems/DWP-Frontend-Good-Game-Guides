import React, { useState } from 'react';
import { Container, Typography, Pagination } from '@mui/material';
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
    link: "/guides/elden-ring",
    author: "Autor 1",
    rating: "4.5/5"
  },
  { 
    id: 2, 
    title: "Guía de The Witcher 3", 
    category: "RPG", 
    date: "10/03/2025", 
    image: "https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg",
    link: "/guides/witcher-3",
    author: "Autor 2",
    rating: "4.7/5"
  },
  { 
    id: 3, 
    title: "Guía de Minecraft", 
    category: "Sandbox", 
    date: "05/03/2025", 
    image: "https://i.pinimg.com/474x/55/c6/d7/55c6d740a19d9ae2dbe8a05b107bab55.jpg",
    link: "/guides/minecraft",
    author: "Autor 3",
    rating: "4.8/5"
  },
  { 
    id: 4, 
    title: "Guía de Age of Empires II", 
    category: "Estrategia", 
    date: "02/03/2025", 
    image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg",
    link: "/guides/aoe2",
    author: "Autor 4",
    rating: "4.2/5"
  },
  { 
    id: 5, 
    title: "Guía de Dark Souls", 
    category: "RPG", 
    date: "01/03/2025", 
    image: "https://assets-prd.ignimgs.com/2021/12/07/darksouls-org-1638838962208.png?width=300&crop=1%3A1%2Csmart&auto=webp",
    link: "/guides/dark-souls",
    author: "Autor 5",
    rating: "4.6/5"
  },
];

const IndiceGuias = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedGuides = guias.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Navbar />
      <Container className="guias-container">
        <Typography variant="h4" className="guias-title">Índice de Guías</Typography>
        <GuiaLista guias={selectedGuides} />
        
        <Pagination className='pagination-container'
          count={Math.ceil(guias.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange} 
        />
      </Container>
    </>
  );
};

export default IndiceGuias;
