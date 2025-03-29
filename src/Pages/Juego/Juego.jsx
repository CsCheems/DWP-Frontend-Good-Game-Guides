import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar/Navbar';
import { obtenerJuegoPorId  } from "../../servicios/RawgAPI";
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography, Container, Grid } from '@mui/material';
import SidebarJuegos from '../../Layouts/Sidebar/Sidebar-juegos';
import GuiaJuegoBanner from '../../Components/GuiaJuego/GuiaJuegoBanner';

export default function Juego() {
    const { id } = useParams();
    const [juego, setJuego] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJuego = async () => {
            try {
                const response = await obtenerJuegoPorId(id);
                setJuego(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al cargar el juego:', error);
                setLoading(false);
            }
        };

        fetchJuego();
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (!juego) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Typography variant="h5" color="error">
                    Juego no encontrado
                </Typography>
            </Box>
        );
    }

    return (
        <div className="home-container">
            <Navbar />

            <Container sx={{marginTop:"75px"}}>
                <Grid  container spacing={2}>
                <Grid item xs={3}>
                    {/* Verificar si el juego tiene géneros antes de cargar el sidebar */}
                    {juego.genres && juego.genres.length > 0 && (
                            <SidebarJuegos generoId={juego.genres[0].id} />
                    )}
                </Grid >
                <Grid item xs={9} >
                    <>
                    <GuiaJuegoBanner juegoBanner={juego}/>
                    </>
                </Grid >
                </Grid>
            </Container>
            
            
        </div>
    );
}


          