import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalAuth from "../../Components/Modals/Modal";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const navItems = [
    { label: "INICIO", path: "/" },
    { label: "GUÍAS", path: "/guias" },
    { label: "FORO", path: "/foro" },
    { label: "CONTACTO", path: "/contacto" },
  ];

  const {user, logout} = useAuth();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <ModalAuth open={open} handleClose={() => setOpen(false)}/>
      <AppBar 
        sx={{
          position:"static",
          background:"linear-gradient(90deg, rgba(127,8,170,1) 0%, rgba(217,111,255,1) 69%)",
          borderRadius:"8px 8px 8px 8px",
          height: "64px",
        }}
      >
    <Toolbar className="tool-bar"
      sx={{
        alignItems: "center",
        minHeight:"64px",
      }}
    >
      <Box
        sx={{
          height: "140px",
          marginTop: "20px"
        }}
        component="img"
        src="/logo.png"
        alt="Logo"
      />

      <Stack direction="row">
        {navItems.map((item) => (
          <Button
            sx={{
              fontFamily: "Inter-Regular, Helvetica",
              bgcolor: "transparent",
              color: "white",
              fontWeight: "bold",
              height: "64px",
              borderRadius: "0px",
              "&:hover": {
                textShadow: "0 0 13px #fff",
              },
              
            }}
            key={item.label}
            component={Link}
            to={item.path}
          >
            {item.label}
          </Button>
        ))}
      </Stack>

      {/* Contenedor centrado para la barra de búsqueda */}
      <Box className="search-container">
        <Autocomplete
          freeSolo
          options={[]}
          sx={{
            width: 400,
            "& .MuiOutlinedInput-root": {
              bgcolor: "white",
              borderRadius: "8px",
              height: 35,
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Buscar..."
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                sx: {
                  fontSize: "0.75rem",
                  color: "#000",
                  fontFamily: "Inter-Regular, Helvetica",
                },
              }}
            />
          )}
        />
      </Box>

      {/* Login/Register Button */}
      <Box sx={{ flexGrow: 1 }} />

      {user ? (
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            {user.usuario}
          </Typography>
          <Avatar src={user.avatar || "/default-avatar.png"} />
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Stack>
      ) : (
      <Button
        sx={{
          fontFamily: "Inter-Regular, Helvetica",
          bgcolor: "transparent",
          color:"#fff",
          height: "64px",
          fontWeight: "bold",
          borderRadius: "0px",
          "&:hover": {
            textShadow: "0 0 13px #fff",
          },
        }}
        onClick={() => setOpen(true)}
      >
        REGISTRO/LOGIN
      </Button>
  )}
    </Toolbar>
  </AppBar>
  
  </>      
  );
};

export default Navbar;
