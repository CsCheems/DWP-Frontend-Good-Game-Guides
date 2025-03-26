
import React, { useState } from "react";
import { Modal, Box, Button, TextField, Stack } from "@mui/material";

const ModalAuth = ({ open, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastLogin, setLastLogin] = useState("");

  const handleSubmitLog = async () => {
    e.preventDefault();
    try {
      const res = await login(username, password);
      if(res.statusCode === 201){
        //cerrar modal
        //actuilzar estado de navbar
      }
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("Error desconocido");
      }
    }
    
  }  

  return (
    <>
        <Modal 
            open={open} 
            onClose={handleClose}
            BackdropProps={{
                sx: { backdropFilter: "blur(6px)" }
            }}
        >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          background:"linear-gradient(90deg, rgba(127,8,170,1) 0%, rgba(217,111,255,1) 69%)",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          <Button
            variant={isLogin ? "contained" : "outlined"}
            onClick={() => setIsLogin(true)}
            sx={{
                color: "white",
                background: isLogin ? "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)" : "transparent",
                border: "none",
            }}
          >
            Login
          </Button>
          <Button
            variant={!isLogin ? "contained" : "outlined"}
            onClick={() => setIsLogin(false)}
            sx={{
                color: "white", 
                background: !isLogin ? "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)" : "transparent",
                border: "none",
            }}
            >
            Registro
          </Button>
        </Stack>

        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </Box>
    </Modal>
    </>
    
  );
};

// Formulario de Login
const LoginForm = () => (
  <Box>
    <TextField 
    fullWidth 
    label="Usuario" 
    name="username"
    margin="normal" 
    sx={{
      bgcolor:"white", borderRadius: "8px", border: "none",
    }}

    />
    <TextField 
    fullWidth 
    label="Contraseña"
    name="password"
    type="password" 
    margin="normal" 
    sx={{
      bgcolor:"white", borderRadius: "8px", border: "none",
    }}
    />
    <Button 
    fullWidth 
    variant="contained" 
    sx={{ 
        mt: 2, 
        background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
    }}
    >
      Iniciar Sesión
    </Button>
    <Button 
    fullWidth 
    variant="text" 
    sx={{ 
        mt: 2, color: "white", 
    }}
    >
      Recuperar Contraseña
    </Button>
  </Box>
);

// Formulario de Registro
const RegisterForm = () => (
  <Box>
    <TextField fullWidth label="Correo Electrónico" name="email" type="email" margin="normal" 
    sx={{
        bgcolor:"white", borderRadius: "8px", border: "none",
    }}
    />
    <TextField fullWidth label="Teléfono" name="phone" type="tel" margin="normal" 
    sx={{
      bgcolor:"white", borderRadius: "8px", border: "none",
    }}
    />
    <TextField fullWidth label="Fecha de Nacimiento" name="dob" type="date" margin="normal" InputLabelProps={{ shrink: true }} 
    sx={{
      bgcolor:"white", borderRadius: "8px", border: "none",
    }}
    />
    <TextField fullWidth label="Nombre de Usuario" name="username" margin="normal" 
    sx={{
      bgcolor:"white", borderRadius: "8px", border: "none",
    }}
    />
    <TextField fullWidth label="Contraseña" name="password" type="password" margin="normal" 
    sx={{
      bgcolor:"white", borderRadius: "8px", border: "none",
    }}
    />
    <Button fullWidth variant="contained" 
        sx={{ 
            mt: 2, color: "white", background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
        }}
    >
      Registrarse
    </Button>
  </Box>
);

export default ModalAuth;
