import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import Navbar from '../../Layouts/Navbar/Navbar';
import './Contacto.css';

const Contacto = () => {
  return (
    <>
      <Navbar />
      <Container className="contacto-container">
        <Typography variant="h4" className="contacto-title">Contacto</Typography>
        
        <Grid container spacing={4}>
          {/* Sección de información */}
          <Grid item xs={12} md={6} className="contacto-info">
            <Typography variant="h6">Contáctanos por correo o redes sociales para:</Typography>
            <ul>
              <li>Si la página web o el foro no funcionan, el servidor no responde o es muy lento, las imágenes no se ven, etc.</li>
              <li>Si tienes problemas para registrarte en el foro.</li>
              <li>Si quieres que incluyamos una nueva guía o truco.</li>
              <li>Si deseas colaborar con una guía completa.</li>
              <li>Para agradecer, criticar o hacer cualquier tipo de comentario.</li>
            </ul>

            <Typography variant="h6">No uses el correo o redes sociales para:</Typography>
            <ul>
              <li>Hacer preguntas sobre juegos (cómo obtener un objeto, pasar un nivel, derrotar a un enemigo, etc.).</li>
              <li>Resolver dudas sobre trucos o desbloqueo de logros/trofeos.</li>
            </ul>

            <Typography variant="body1">
              Para este tipo de preguntas, usa el foro. El registro es gratuito y sencillo, y ahí tanto el equipo como otros usuarios podrán ayudarte con cualquier duda. Si preguntas por correo o redes sociales, no recibirás respuesta.
            </Typography>

            <Typography variant="body1" className="contacto-datos">
              <strong>Correo:</strong> ChemaDev@gmail.com<br />
              <strong>Redes Sociales:</strong> Facebook & X (Twitter)
            </Typography>
          </Grid>

          {/* Sección del formulario */}
          <Grid item xs={12} md={6}>
            <Box component="form" className="contacto-form">
              <TextField label="Nombre" variant="outlined" fullWidth className="contacto-input" />
              <TextField label="Correo Electrónico" variant="outlined" fullWidth type="email" className="contacto-input" />
              <TextField label="Mensaje" variant="outlined" fullWidth multiline rows={4} className="contacto-input" />
              <Button variant="contained" color="primary" className="contacto-button">
                Enviar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contacto;
