import React from 'react';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const topGuides = [
  { id: 1, title: "Guía de Elden Ring", image: "https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg?width=300&crop=1%3A1%2Csmart&auto=webp" },
  { id: 2, title: "Guía de The Witcher 3", image: "https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg?width=300&crop=1%3A1%2Csmart&auto=webp" },
  { id: 3, title: "Guía de Minecraft", image: "https://i.pinimg.com/474x/55/c6/d7/55c6d740a19d9ae2dbe8a05b107bab55.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  
];

const StyledCard = styled('div')({
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 3,
  borderRadius: '8px',
  border: '2px solid'
});

const StyledCardMedia = styled('img')({
  height: '250px',
  objectFit: 'cover',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
  borderBottomLeftRadius: '8px',
});

const StyledCardContent = styled('div')({
  flexGrow: 1,
  padding: '16px',
});

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          marginTop: '100px',
        }}
      >
        <Typography variant="h4" gutterBottom align="center">Guías Más Valoradas</Typography>
        <Grid container spacing={3} justifyContent="center">
          {topGuides.map((guide) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={guide.id}>
              <StyledCard>
                <StyledCardMedia
                  src={guide.image}
                  alt={guide.title}
                />
                <StyledCardContent>
                  <Typography variant="h6" noWrap>{guide.title}</Typography>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
