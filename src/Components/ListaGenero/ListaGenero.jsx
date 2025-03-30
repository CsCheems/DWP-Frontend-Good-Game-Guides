import React, { useEffect } from 'react'
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function ListaGenero({listaJuegosPorGenero, nombreGenero}) {
    const navigate = useNavigate();
    useEffect(() => {
      
    }, [])
    return (
        <Box>
            <Typography sx={{marginTop:"25px", fontWeight:"bold", textAlign:"left"}} variant="h5" gutterBottom>
                Guias para {nombreGenero}
            </Typography>

            <Grid container spacing={2} sx={{marginTop:"10px", justifyContent:'center'}}>
                    {listaJuegosPorGenero.map((item, index) => (
                      <Grid key={index} item xs={12} sm={6} md={4}>
                        <Box position="relative" width="100%" height={300}
                          onClick={() =>  navigate(`/juego/${item.id}`)}
                          sx={{
                            background: "linear-gradient(90deg, rgba(127,8,170,1) 0%, rgba(217,111,255,1) 69%)",
                            padding: "0px",
                            borderRadius: "10px",
                            "&:hover": {
                            transform: "scale(1.05)",
                            transition: "transform 0.6s",
                            color: "#fff",
                            "& .MuiAvatar-root": {
                            transition: "transform 0.6s",
                            }
                        },
                        }}
                        >
                          <Avatar
                            src={item.background_image}
                            sx={{
                              width: "100%",
                              height: "75%",
                              borderRadius: "10px 10px 0 0",
                              objectFit: "cover",
                            }}
                            variant="rounded"
                          />
                          <Typography textAlign="center" sx={{ padding: "8px", fontWeight: "bold", fontSize: "0.8rem" }} mt={1}>
                            {item.name}{' '}
                            <Typography
                                component="span"
                                sx={{
                                    backgroundColor: 'green',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '2px',
                                    borderRadius: '4px',
                                    fontSize: '0.9rem',
                                }}
                            >
                                {item.metacritic}
                            </Typography>
                          </Typography>
                          <Typography textAlign="center" sx={{ fontSize: "0.9rem", opacity: 0.8 }}>
                                ⭐{item.rating} 💬{item.reviews_count} 👍{item.suggestions_count}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

        </Box>

    )
}
