import React, { useState, useEffect } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useAuth } from '../../Context/AuthContext';
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import Modal2FA from '../../Components/Modals/Modal2FA';

export default function User() {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    phone: '',
    email: '',
    username: '',
    avatar: '',
    dob: '',
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setUserData({
        phone: user.phone || '',
        email: user.email || '',
        username: user.usuario || '',
        avatar: user.avatar || '/default-avatar.png',
        dob: user.dob || 'Fecha no disponible',
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos actualizados:', userData);
    
  };

  return (
    <>
      <Navbar />
      <Modal2FA open={open} handleClose={() => setOpen(false)}/>
      <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', gap: 2, marginTop: '50px' }}>
        <Paper elevation={3} sx={{ p: 2, minWidth: 200, background: "linear-gradient(90deg, rgb(175, 125, 193) 0%, rgba(217,111,255,1) 69%)", color: 'white' }}>
          <Typography variant="h5" sx={{fontWeight: "bold"}} gutterBottom>Opciones</Typography>
          <List>
            <ListItem button>
              <ListItemText primary="Guías Favoritas" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Foros de Discusión" />
            </ListItem>
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemText primary="Seguridad" />
            </ListItem>
          </List>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, flexGrow: 1, background: "linear-gradient(90deg, rgb(175, 125, 193) 0%, rgba(217,111,255,1) 69%)", color: 'white' }}>
          <Typography variant="h5" gutterBottom sx={{fontWeight: "bold"}} >Perfil de {userData.username.toUpperCase()}</Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar src={userData.avatar} alt="Avatar" sx={{ width: 100, height: 100, mb: 2 }} />
          </Box>
          <Button variant="contained" component="label" fullWidth 
            sx={{ 
              mb: 2,
              color: "white", 
              background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
              border: "none",
            }}>
            Cambiar Avatar
            <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
          </Button>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {['username', 'email', 'phone', 'dob'].map((field) => (
                <Grid item xs={12} key={field}>
                  <TextField 
                    fullWidth 
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    value={userData[field]} 
                    onChange={handleInputChange} 
                    InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" 
                  sx={{
                    color: "white", 
                    background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
                    border: "none",
                  }}
                  fullWidth>
                  Guardar Cambios
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}
