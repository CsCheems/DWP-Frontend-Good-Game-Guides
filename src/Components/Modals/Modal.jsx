import React, { useState } from "react";
import { Modal, Box, Button, TextField, Stack, Typography } from "@mui/material";
import { registro } from "../../servicios/authService";

const ModalAuth = ({ open, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
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
        {isLogin ? <LoginForm handleClose={handleClose}/> : <RegisterForm handleClose={handleClose}/>}
      </Box>
    </Modal>
  );
};

const LoginForm = ({ handleClose }) => (
  <Box>
    <TextField fullWidth label="Usuario" margin="normal" sx={{ bgcolor:"white", borderRadius: "8px" }} />
    <TextField fullWidth label="Contraseña" type="password" margin="normal" sx={{ bgcolor:"white", borderRadius: "8px" }} />
    <Button fullWidth variant="contained" sx={{ mt: 2, background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)" }}>Iniciar Sesión</Button>
    <Button fullWidth variant="text" sx={{ mt: 2, color: "white" }}>Recuperar Contraseña</Button>
  </Box>
);

const RegisterForm = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    const minAge = 13;
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    if (!emailRegex.test(email)) tempErrors.email = "Correo no válido";
    if (!/^[0-9]{10}$/.test(phone)) tempErrors.phone = "Teléfono debe tener 10 dígitos";
    if (age < minAge || birthDate > today) tempErrors.dob = "Debes tener al menos 13 años";
    if (username.length > 10) tempErrors.username = "Max 10 caracteres";
    if (!passwordRegex.test(password)) tempErrors.password = "Debe incluir 8 caracteres, 1 mayúscula y 1 número";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRegister = async() => {
    if (validate()) {
      const res = await registro(email, phone, dob, username, password);
      if(res.statusCode === 201){
        handleClose();
      }else{
        setError(res?.message || "Error desconocido");
      }
    }
  };

  return (
    <Box>
      <TextField fullWidth label="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} error={!!errors.email} helperText={errors.email} margin="normal" sx={{ bgcolor: "white", borderRadius: "8px" }} />
      <TextField fullWidth label="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} error={!!errors.phone} helperText={errors.phone} margin="normal" sx={{ bgcolor: "white", borderRadius: "8px" }} />
      <TextField fullWidth label="Fecha de Nacimiento" type="date" value={dob} onChange={(e) => setDob(e.target.value)} error={!!errors.dob} helperText={errors.dob} margin="normal" InputLabelProps={{ shrink: true }} sx={{ bgcolor: "white", borderRadius: "8px" }} />
      <TextField fullWidth label="Nombre de Usuario" value={username} onChange={(e) => setUsername(e.target.value)} error={!!errors.username} helperText={errors.username} margin="normal" sx={{ bgcolor: "white", borderRadius: "8px" }} />
      <TextField fullWidth label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={!!errors.password} helperText={errors.password} margin="normal" sx={{ bgcolor: "white", borderRadius: "8px" }} />
      {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
      <Button fullWidth variant="contained" onClick={handleRegister} sx={{ mt: 2, color: "white", background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)" }}>Registrarse</Button>
    </Box>
  );
};

export default ModalAuth;
