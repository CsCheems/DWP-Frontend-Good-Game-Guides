import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, TextField, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

//Estilos
const StyledAppBar = styled(AppBar)(() => ({
  boxShadow: 3,
  backgroundColor: '#844184',
  padding: '5px 0',
  position: 'fixed', // Fija el navbar en la parte superior
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100, // Asegúrate de que el navbar esté por encima de otros elementos
}));

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#9B4D9B',
    transition: 'background-color 0.3s ease',
  },
});

const SearchInput = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '5px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#bbb',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2980b9',
    },
  },
});

const Logo = styled('img')({
  height: 50, 
  cursor: 'pointer',
});

//Navbar
const Navbar = () => {

  //const { isLogOn, userName, logout } = useContext(AuthContext);

  //simulacion
  const isLogOn = true;
  const userName = "Chema"; 
  const userAvatar = "/avatar.png"; 

  return (
    <StyledAppBar>
      <Toolbar>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Logo y botones de navegación a la izquierda */}
            <Box sx={{ flex: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link to="/">
                <Logo src="/logo.png" alt="Good Game Guides" />
              </Link>
              <StyledButton color="inherit" component={Link} to="/">
                Inicio
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/guias">
                Guías
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/foro">
                Foro
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/contacto">
                Contacto
              </StyledButton>
            </Box>

            {/* Menú con la barra de búsqueda centrada */}
            <Box sx={{ flex: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
              <SearchInput
                variant="outlined"
                size="small"
                placeholder="Buscar guías..."
                sx={{ width: 250 }}
              />
            </Box>

            {/* Botones de Login y Registro alineados a la derecha */}
            <Box sx={{ flex: 2, display: 'flex', justifyContent: 'flex-end', gap: 4 }}> {/* Aquí cambié gap: 2 a gap: 4 */}
              {!isLogOn ? (
                <>
                  <StyledButton color="inherit" component={Link} to="/login">
                    Login
                  </StyledButton>
                  <StyledButton color="inherit" component={Link} to="/register">
                    Registro
                  </StyledButton>
                </>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}> {/* También cambié gap aquí */}
                  <Avatar alt={userName} src={userAvatar} sx={{ width: 32, height: 32 }} />
                  <StyledButton color="inherit" variant="body1" component={Link} to="/perfil">
                    {userName}
                  </StyledButton>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
