import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar/Navbar';
import { obtenerJuegoPorId  } from "../../servicios/RawgAPI";
import { Box, CircularProgress, Typography, Container, Grid } from '@mui/material';
import SidebarJuegos from '../../Layouts/Sidebar/Sidebar-juegos';
import GuiaJuegoBanner from '../../Components/GuiaJuego/GuiaJuegoBanner';
import GuiaJuego from '../../Components/GuiaJuego/GuiaJuego';
import Comentarios from '../../Components/Comentarios/Comentarios';
import { obtenerComentarios, comentar, responderComentario } from '../../servicios/commentsService';
import { useAuth } from '../../Context/AuthContext';

export default function Juego() {
    const { user } = useAuth();
    const { id } = useParams();
    const [juego, setJuego] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comentarios, setComentarios] = useState([]);

    const agruparComentarios = (comentarios) => {

        const mapaComentarios = {};

        comentarios.forEach((comentario) => {
            mapaComentarios[comentario.comentarioId] = {...comentario, respuestas: []};
        });

        const comentariosEstructurados = [];

        comentarios.forEach((comentario) => {
            if(comentario.parentId){
                const comentarioPadre = mapaComentarios[comentario.parentId];
                if(comentarioPadre){
                    comentarioPadre.respuestas.push(mapaComentarios[comentario.comentarioId]);
                }
            }else{
                comentariosEstructurados.push(mapaComentarios[comentario.comentarioId]);
            }
        });
        return comentariosEstructurados;
    }

    const cargarComentarios = async () => {

        try {
            
            const comentariosObtenidos = await obtenerComentarios(id);
            if(comentariosObtenidos.statusCode === 200){
                const comentariosEstructurados = agruparComentarios(comentariosObtenidos.data);
                setComentarios(comentariosEstructurados);
            }
            
        } catch (error) {
            console.error('Error al cargar los comentarios:', error);
        }
    };

    const handleSubmitComentario = async (nuevoComentario) => {
        try {
            await comentar(user.usuario, nuevoComentario, id);
            cargarComentarios();
        } catch (error) {
            console.error("Error al agregar comentario:", error);
        }
    };

    const handleResponderComentario = async (comentarioId, respuesta) => {
        try {
            await responderComentario(user.usuario, comentarioId, respuesta, id);
            cargarComentarios();
        } catch (error) {
            console.error("Error al responder el comentario:", error);
        }
    };

    const handleValorarComentario = async (comentarioId, valor) => {
        try {
            await valorarComentario(comentarioId, valor);
            cargarComentarios();
        } catch (error) {
            console.error("Error al valorar el comentario:", error);
        }
    };

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

        setComentarios([]);

        fetchJuego();
        cargarComentarios();
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
                    <GuiaJuego/>
                    <Comentarios
                                comentarios={comentarios}
                                onSubmitComentario={handleSubmitComentario}
                                onResponderComentario={handleResponderComentario}
                                onValorarComentario={handleValorarComentario}
                                juegoId={juego.id}
                    />
                    </>
                </Grid >
                </Grid>
            </Container>
            
            
        </div>
    );
}


          