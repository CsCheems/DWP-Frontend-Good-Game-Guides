import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, TextField, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const isLogOn = true;
  const userName = "Chema"; 
  const userAvatar = "/avatar.png"; 

  return (
    <AppBar className="StyledAppBar">
      <Toolbar>
        <Container maxWidth="lg">
          <Box className="StyledBox">
            
            <Box style={{ flex: 3, display: 'flex', alignItems: 'center', gap: 16 }}>
              <Link to="/">
                <img src="/logo.png" alt="Good Game Guides" className="Logo" />
              </Link>
              <Button color="inherit" component={Link} to="/" className="StyledButton">
                Inicio
              </Button>
              <Button color="inherit" component={Link} to="/guias" className="StyledButton">
                Guías
              </Button>
              <Button color="inherit" component={Link} to="/foro" className="StyledButton">
                Foro
              </Button>
              <Button color="inherit" component={Link} to="/contacto" className="StyledButton">
                Contacto
              </Button>
            </Box>

            <Box style={{ flex: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Buscar guías..."
                className="SearchInput"
                style={{ width: 250 }}
              />
            </Box>

            <Box style={{ flex: 2, display: 'flex', justifyContent: 'flex-end', gap: 32 }}>
              {!isLogOn ? (
                <>
                  <Button color="inherit" component={Link} to="/login" className="StyledButton">
                    Login
                  </Button>
                  <Button color="inherit" component={Link} to="/register" className="StyledButton">
                    Registro
                  </Button>
                </>
              ) : (
                <Box style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <Avatar alt={userName} src={userAvatar} style={{ width: 32, height: 32 }} />
                  <Button color="inherit" variant="body1" component={Link} to="/perfil" className="StyledButton">
                    {userName}
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
