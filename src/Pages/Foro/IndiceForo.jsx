import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import './GuidesIndex.css';

const guides = [
  { id: 1, title: "Guía de Elden Ring", link: "/guides/elden-ring" },
  { id: 2, title: "Guía de The Witcher 3", link: "/guides/witcher-3" },
  { id: 3, title: "Guía de Minecraft", link: "/guides/minecraft" },
  { id: 4, title: "Guía de Age of Empires II", link: "/guides/aoe2" },
];

const GuidesIndex = () => {
  return (
    <Container className="guides-container">
      <Typography variant="h4" className="guides-title">Lista de Guías de Videojuegos</Typography>
      <List className="guides-list">
        {guides.map((guide) => (
          <React.Fragment key={guide.id}>
            <ListItem className="guides-item">
              <Link to={guide.link} className="guides-link">
                <ListItemText primary={guide.title} />
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default GuidesIndex;