import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { Container, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
const topGuides = [
  { id: 1, title: "Guía de Elden Ring", image: "https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg?width=300&crop=1%3A1%2Csmart&auto=webp" },
  { id: 2, title: "Guía de The Witcher 3", image: "https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg?width=300&crop=1%3A1%2Csmart&auto=webp" },
  { id: 3, title: "Guía de Minecraft", image: "https://i.pinimg.com/474x/55/c6/d7/55c6d740a19d9ae2dbe8a05b107bab55.jpg" },
  { id: 4, title: "Guía de Age of Empires II", image: "https://news.xbox.com/es-latam/wp-content/uploads/sites/4/HERO-35-hero-small.jpg" },
  { id: 5, title: "Dark Souls Remastered", image: "https://assets-prd.ignimgs.com/2021/12/07/darksouls-org-1638838962208.png?width=300&crop=1%3A1%2Csmart&auto=webp" }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
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
    </div>
  );
};

export default Home;
