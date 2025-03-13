import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import './GuiaItem.css';

const GuiaItem = ({ guia }) => {
  return (
    <ListItem className="guia-item">
      <ListItemAvatar>
        <Avatar variant="square" src={guia.image} className="guia-avatar" />
      </ListItemAvatar>
      <ListItemText
        primary={<Link to={guia.link} className="guia-link">{guia.title}</Link>}
        secondary={`${guia.category} - ${guia.date}`}
      />
    </ListItem>
  );
};

export default GuiaItem;
