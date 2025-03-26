import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function Banner({ juegoBanner }) {
  useEffect(() => {
    console.log("juego banner:", juegoBanner);
  });

  return (
    <Box position="relative" width={800} height={500}>
      {/* Nombre del juego */}
      

      {/* Imagen del banner */}
      <Avatar
        src={juegoBanner.background_image}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          objectFit: "cover",
        }}
        variant="rounded"
      />
        <Typography
            sx={{
            position: "absolute",
            bottom: 40,
            left: 15,
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "left",
            mb: 1,
            color:"#fff",
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.8)"
            }}
        >
            {juegoBanner.name}
        </Typography>

      {/* Botón "Ver Guía" en la parte inferior izquierda */}
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: 15,
          left: 15,
          backgroundColor: "#810AAC",
          color: "#fff",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "8px",
          padding: "6px 16px",
          "&:hover": {
            backgroundColor: "#D96FFF",
          },
        }}
      >
        Ver Guía
      </Button>
      
    </Box>
  );
}
