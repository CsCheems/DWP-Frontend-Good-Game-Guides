import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, List, ListItem, Divider, Collapse } from '@mui/material';
import { Reply, ThumbUp, ThumbDown, ExpandMore, ExpandLess } from '@mui/icons-material';
import { useAuth } from '../../Context/AuthContext';


const Comentario = ({ comentario, onSubmitComentario, onResponderComentario, onValorarComentario }) => {
  const [contenido, setContenido] = useState('');
  const [responderVisible, setResponderVisible] = useState(false);
  const [mostrarRespuestas, setMostrarRespuestas] = useState(false);
  

  const handleComentarioChange = (event) => {
    setContenido(event.target.value);
  };

  const handleResponder = () => {
    onResponderComentario(comentario.comentarioId, contenido);
    setContenido('');
    setResponderVisible(false);
  };

  const handleMostrarRespuestas = () => {
    setMostrarRespuestas(!mostrarRespuestas);
  };

  return (
    <Box sx={{ marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: '8px', background: 'linear-gradient(90deg, rgba(127,8,170,1) 0%, rgba(217,111,255,1) 69%)', color: 'white' }}>
      <Typography variant="h6" sx={{ marginTop: 1, textAlign:'left'}}>{comentario.autor}{' - comentado en: '}{comentario.fecha}</Typography>
      <Typography variant="body1" sx={{ marginTop: 1, textAlign:'left'}}>
        {comentario.comentario}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
        <IconButton onClick={() => onValorarComentario(comentario.id, 'like')}>
          <ThumbUp sx={{ color: 'white' }} />
        </IconButton>
        <IconButton onClick={() => onValorarComentario(comentario.id, 'dislike')}>
          <ThumbDown sx={{ color: 'white' }} />
        </IconButton>

        <Button 
          startIcon={<Reply />} 
          onClick={() => setResponderVisible(!responderVisible)}
          sx={{ color: 'white' }}
        >
          Responder
        </Button>

        {comentario.respuestas && comentario.respuestas.length > 0 && (
          <IconButton onClick={handleMostrarRespuestas} sx={{ color: 'white' }}>
            {mostrarRespuestas ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </Box>

      <Collapse in={responderVisible}>
        <TextField
          label="Escribe tu respuesta"
          variant="outlined"
          fullWidth
          value={contenido}
          onChange={handleComentarioChange}
          sx={{ marginTop: 2, input: { color: 'white' }, label: { color: 'white' }}}
        />
        <Button 
          variant="contained" 
          onClick={handleResponder} 
          sx={{ marginTop: 1 }}
        >
          Enviar respuesta
        </Button>
      </Collapse>

      <Collapse in={mostrarRespuestas}>
        <List sx={{ marginTop: 2 }}>
          {comentario.respuestas && comentario.respuestas.map((respuesta) => (
            <ListItem key={respuesta.comentarioId}>
              <Box sx={{ paddingLeft: 4 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>
                  {respuesta.autor}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>{respuesta.comentario}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Collapse>

      <Divider sx={{ marginTop: 2, backgroundColor: 'white' }} />
    </Box>
  );
};

const Comentarios = ({ comentarios, onSubmitComentario, onResponderComentario, onValorarComentario }) => {
  const [nuevoComentario, setNuevoComentario] = useState('');
  const { user, openLoginModalHandler } = useAuth();

  const handleNuevoComentarioChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handleNuevoComentarioSubmit = () => {
    if(!user){
        openLoginModalHandler();
    }else{
        onSubmitComentario(nuevoComentario);
        setNuevoComentario('');
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(90deg, rgba(127,8,170,1) 0%, rgba(217,111,255,1) 69%)', color: 'white', padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Comentarios</Typography>

      <TextField
        label="Escribe tu comentario"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={nuevoComentario}
        onChange={handleNuevoComentarioChange}
        sx={{ marginBottom: 2, input: { color: 'white' }, label: { color: 'white' }}}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleNuevoComentarioSubmit}
        sx={{ 
            color: 'white', 
            background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
            mb: 2
         }}
      >
        Enviar comentario
      </Button>

      {comentarios && comentarios.length > 0 ? (
        comentarios.map((comentario) => (
          <Comentario
            key={comentario.comentarioId}
            comentario={comentario}
            onResponderComentario={onResponderComentario}
            onValorarComentario={onValorarComentario}
          />
        ))
      ) : (
        <Typography variant="body1" color="inherit">No hay comentarios aún.</Typography>
      )}
    </Box>
  );
};

export default Comentarios;
