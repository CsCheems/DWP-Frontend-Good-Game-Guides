import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function GuiasPopulares({ guiasPopulares }) {
  useEffect(() => {

  }, []);

  return (
    <Box>
      <Typography sx={{marginTop:"25px", fontWeight:"bold", textAlign:"left"}} variant="h5" gutterBottom>
        Guías Populares
      </Typography>

      <Grid container spacing={2}>
        {guiasPopulares.slice(0, 4).map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Box position="relative" width="100%" height={300} p={1}
              sx={{"&:hover": {
              color: "#fff",
              "& .MuiAvatar-root": {
                transform: "scale(1.05)",
                transition: "transform 0.6s",
              },
              "& .MuiTypography-root": {
                fontWeight: "bold",
              },
            },
            }}
            >
              <Avatar
                src={item.background_image}
                sx={{
                  width: "100%",
                  height: "85%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                variant="rounded"
              />
              <Typography textAlign="center" mt={1}>
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
