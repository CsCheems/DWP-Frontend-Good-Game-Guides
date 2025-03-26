import React, { useEffect, useState } from "react";
import { obtenerGenerosLista } from "../../servicios/RawgAPI";
import { Box, Typography, Avatar } from "@mui/material";

const Sidebar = ({generoId}) => {
  const [generoLista, setGeneroLista] = useState([]);
  const [indiceActivo, setIndiceActivo] = useState(null);

  useEffect(() => {
    obtenerGeneros();
  }, []);

  const obtenerGeneros = () => {
    obtenerGenerosLista.then((resp) => {
      setGeneroLista(resp.data.results);
    });
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
        Géneros
      </Typography>
      {generoLista.map((item, index) => (
        <Box
          key={index}
          onClick={() => {setIndiceActivo(index); generoId(item.id)}}
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
            src={item.image_background}
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
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
