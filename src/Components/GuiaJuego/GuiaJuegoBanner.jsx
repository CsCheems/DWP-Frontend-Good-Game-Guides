import React, { useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function GuiaJuegoBanner({juegoBanner}) {

    useEffect(() => {
        
    });

    return (
        <Box position="relative" width={870} height={500}>
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
        </Box>
    )
}

 /*
 <GuiaJuegoBanner juegoBanner={} />
 
 <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#121212',
                    padding: 2
                }}
            >
                {loading ? (
                    <CircularProgress color="secondary" />
                ) : (
                    juego && (
                        <Card 
                            sx={{
                                maxWidth: 800,
                                backgroundColor: '#1e1e1e',
                                color: '#fff',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image={juego.background_image}
                                alt={juego.name}
                                sx={{ borderRadius: '2px 2px 0 0' }}
                            />
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    {juego.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: '#ddd' }}>
                                    {juego.description_raw}
                                </Typography>
                                <Typography variant="h6" sx={{ marginTop: 2 }}>
                                    Metacritic: {juego.metacritic || 'No disponible'}
                                </Typography>
                                <Typography variant="subtitle1">
                                    Fecha de lanzamiento: {juego.released || 'No disponible'}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                )}
            </Box>*/