import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { obtenerGeneroPorId } from "../../servicios/RawgAPI";
import { useNavigate } from 'react-router-dom';

const SidebarJuegos = ({ generoId }) => {
  const [juegos, setJuegos] = useState([]);
  const [indiceActivo, setIndiceActivo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (generoId) {
      obtenerJuegosSimilares(generoId);
    }
  }, [generoId]);

  const obtenerJuegosSimilares = async (id) => {
    try {
      const response = await obtenerGeneroPorId(id);
      setJuegos(response.data.results);
    } catch (error) {
      console.error("Error al obtener juegos similares:", error);
    }
  };



  return (
    
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
        Otros juegos similares
      </Typography>
      {juegos.map((juego, index) => (
        
       
        
        <Box
          key={juego.id}
          onClick={() => { setIndiceActivo(index); navigate(`/juego/${juego.id}`)}}
          display="flex"
          alignItems="center"
          gap={2}
          mb={1}
          sx={{
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            backgroundColor: indiceActivo === index ? "#810AAC" : "transparent",
            color: indiceActivo === index ? "#fff" : "inherit",
            "& .MuiAvatar-root": {
              transform: indiceActivo === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s",
            },
            "& .MuiTypography-root": {
              fontWeight: indiceActivo === index ? "bold" : "normal",
            },
            "&:hover": {
              backgroundColor: "#810AAC",
              color: "#fff",
              "& .MuiAvatar-root": {
                transform: "scale(1.1)",
              },
              "& .MuiTypography-root": {
                fontWeight: "bold",
              },
            },
          }}
        >
          <Avatar
            src={juego.background_image}
            sx={{
              width: 72,
              height: 72,
              transition: "transform 0.3s",
            }}
            variant="rounded"
          />
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", transition: "font-weight 0.3s" }}
          >
            {juego.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SidebarJuegos;
