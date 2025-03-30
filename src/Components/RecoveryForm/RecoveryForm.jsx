
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { enviarAEmail, verificarToken, cambiarPassword } from "../../servicios/recoveryService";

export default function RecoveryForm({ handleClose }) {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1); 
  const [error, setError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Correo no válido");
      return false;
    }
    setError("");
    return true;
  };

  const validateToken = () => {
    if (token.trim() === "") {
      setError("El código de verificación no puede estar vacío");
      return false;
    }
    setError("");
    return true;
  };

  const validatePasswords = () => {
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }
    if (newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmitEmail = async () => {
    if (!validateEmail()) return;

    try {
      const res = await enviarAEmail(email);
      console.log(res);
      if (res.status === 200) {
        setEmailSent(true); 
        setStep(2);
      } else {
        setError("No se pudo enviar el correo. Intenta nuevamente.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmitToken = async () => {
    if (!validateToken()) return;
    
    try {
      const res = await verificarToken(token);
      console.log(res);
      if (res.status === 200) {
        setStep(3); 
      } else {
        setError("Token inválido o expirado");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmitNewPassword = async () => {
    if (!validatePasswords()) return;

    try {
      const res = await cambiarPassword(newPassword, email);
      if (res.status === 200) {
        setStep(4);
      } else {
        setError("No se pudo cambiar la contraseña. Intenta nuevamente.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box>
      {step === 1 && !emailSent && (
        <>
          <TextField
            fullWidth
            label="Email de recuperación"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            sx={{ bgcolor: "white", borderRadius: "8px" }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmitEmail}
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
            }}
          >
            Enviar
          </Button>
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
        </>
      )}

      {step === 1 && emailSent && (
        <>
          <Typography sx={{ mt: 1 }}>¡Se ha enviado un correo de recuperación! Por favor revisa tu bandeja de entrada.</Typography>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleClose}
            sx={{
              mt: 2,
              color: "white",
              background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
            }}
          >
            Cerrar
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <TextField
            fullWidth
            label="Código de verificación"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            margin="normal"
            sx={{ bgcolor: "white", borderRadius: "8px" }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmitToken}
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
            }}
          >
            Validar Código
          </Button>
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
        </>
      )}

      {step === 3 && (
        <>
          <TextField
            fullWidth
            label="Nueva Contraseña"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin="normal"
            sx={{ bgcolor: "white", borderRadius: "8px" }}
          />
          <TextField
            fullWidth
            label="Confirmar Contraseña"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            sx={{ bgcolor: "white", borderRadius: "8px" }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmitNewPassword}
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
            }}
          >
            Cambiar Contraseña
          </Button>
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
        </>
      )}

      {step === 4 && (
        <>
          <Typography color="success" sx={{ mt: 1 }}>¡Contraseña cambiada con éxito!</Typography>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleClose}
            sx={{
              mt: 2,
              color: "white",
              background: "linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)",
            }}
          >
            Cerrar
          </Button>
        </>
      )}
    </Box>
  );
}
