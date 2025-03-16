import React, { useState } from 'react';
import { Container, Typography, Pagination } from '@mui/material';
import Navbar from '../../Layouts/Navbar/Navbar';
import ForoLista from '../../Components/Foro/ForoLista';
import './IndiceForo.css';

const foros = [
  { 
    id: 1, 
    title: "¿Cuál es tu jefe favorito de Elden Ring?", 
    date: "14/03/2025", 
    comments: 25, 
    author: "Usuario1", 
    link: "/forum/elden-ring"
  },
  { 
    id: 2, 
    title: "Mejores estrategias para The Witcher 3", 
    date: "12/03/2025", 
    comments: 15, 
    author: "Usuario2", 
    link: "/forum/witcher-3"
  },
  { 
    id: 3, 
    title: "Mods recomendados para Minecraft", 
    date: "10/03/2025", 
    comments: 30, 
    author: "Usuario3", 
    link: "/forum/minecraft"
  },
  { 
    id: 4, 
    title: "Estrategias avanzadas en Age of Empires II", 
    date: "08/03/2025", 
    comments: 12, 
    author: "Usuario4", 
    link: "/forum/aoe2"
  },
  { 
    id: 5, 
    title: "Dark Souls: ¿Qué build es la mejor?", 
    date: "06/03/2025", 
    comments: 20, 
    author: "Usuario5", 
    link: "/forum/dark-souls"
  },
];

const IndiceForo = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedForos = foros.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Navbar />
      <Container className="foros-container">
        <Typography variant="h4" className="foros-title">Índice del Foro</Typography>
        <ForoLista foros={selectedForos} />
        
        <Pagination className='pagination-container'
          count={Math.ceil(foros.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange} 
        />
      </Container>
    </>
  );
};

export default IndiceForo;
