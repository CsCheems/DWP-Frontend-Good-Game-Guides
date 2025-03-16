import React from 'react';
import { ListItem, ListItemText, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './ForoItem.css';

const ForoItem = ({ foro }) => {
  return (
    <ListItem className="foro-item">
      <ListItemText
        primary={
          <Link to={foro.link} className="foro-link">
            {foro.title}
          </Link>
        }
        secondary={
          <>
            <Typography variant="body2" className="foro-date">
              Publicado el: {foro.date}
            </Typography>
            <Typography variant="body2" className="foro-comments">
              Comentarios: {foro.comments}
            </Typography>
          </>
        }
      />
      <Box className="foro-info">
        <Typography variant="body2" className="foro-author">
          Autor: {foro.author}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default ForoItem;
