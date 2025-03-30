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
import { Link, useNavigate  } from "react-router-dom";
import ModalAuth from "../../Components/Modals/Modal";
import { useAuth } from "../../Context/AuthContext";
import { buscarJuego } from "../../servicios/RawgAPI";

const Navbar = () => {
  const navItems = [
    { label: "INICIO", path: "/" },
    { label: "GUÍAS", path: "/guias" },
    { label: "FORO", path: "/foro" },
    { label: "CONTACTO", path: "/contacto" },
  ];

  const navigate = useNavigate();

  const { user, logout, openLoginModal, setOpenLoginModal } = useAuth();
  const [open, setOpen] = useState(false);
  const [juegos, setJuegos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleLogout = () => {
    logout();
  };

  const handleSearchChange = async (event) => {
    const valor = event.target.value;
    setBusqueda(valor);
    if(valor.length > 2){
      try {
        const response = await buscarJuego(valor);
        const resultado = response.data.results.map((juego) => ({
          label: juego.name,
          id: juego.id
        }));
        setJuegos(resultado);
      } catch (error) {
        console.error("Error al buscar juegos:", error);
      }
    }else{
      setJuegos([])
    }
  };
  
  const handleSelect = (event, value) => {
    if (value) {
      navigate(`/juego/${value.id}`);
    }
  };

  return (
    <>
      <ModalAuth open={openLoginModal} handleClose={() => setOpenLoginModal(false)} />
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
      <Box className="search-container" sx={{mx: 2}}>
        <Autocomplete
          freeSolo
          options={juegos}
          onChange={handleSelect}
          onInputChange={handleSearchChange}
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
          <Typography
            component={Link}
            to="/perfil"
            sx={{ 
              color: "white", 
              fontWeight: "bold", 
              "&:hover": {
                textShadow: "0 0 13px #fff",
                textDecoration: 'none'
              },  
            }}>
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
        onClick={() => setOpenLoginModal(true)}
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
