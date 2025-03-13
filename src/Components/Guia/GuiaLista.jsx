import React from 'react';
import { List } from '@mui/material';
import GuiaItem from './GuiaItem';
import './GuiaLista.css';

const GuiaLista = ({ guias }) => {
  return (
    <List className="guias-list">
      {guias.map((guia) => (
        <GuiaItem key={guia.id} guia={guia} />
      ))}
    </List>
  );
};

export default GuiaLista;
