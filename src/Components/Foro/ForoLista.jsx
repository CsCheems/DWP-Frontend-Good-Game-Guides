import React from 'react';
import { List } from '@mui/material';
import ForoItem from './ForoItem';
import './ForoLista.css';

const ForoLista = ({ foros }) => {
  return (
    <List className="foros-list">
      {foros.map((foro) => (
        <ForoItem key={foro.id} foro={foro} />
      ))}
    </List>
  );
};

export default ForoLista;