import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './GuiaItem.css';

const GuiaItem = ({ guia }) => {
  return (
    <ListItem className="guia-item">
      <ListItemAvatar>
        <Avatar variant="square" src={guia.image} className="guia-avatar" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link to={guia.link} className="guia-link">
            {guia.title}
          </Link>
        }
        secondary={`${guia.category} - ${guia.date}`}
      />
      {/* Nueva sección para autor y rating */}
      <Box className="guia-info">
        <Typography variant="body2" className="guia-author">{guia.author}</Typography>
        <Typography variant="body2" className="guia-rating">Valoración: {guia.rating}</Typography>
      </Box>
    </ListItem>
  );
};

export default GuiaItem;
