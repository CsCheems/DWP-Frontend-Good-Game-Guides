import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, TextField, Stack, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react'; // Importar el generador de QR
import { generarQR, desactivar2FA, activar2FA } from '../../servicios/authService';
import { useAuth } from '../../Context/AuthContext';

const Modal2FA = ({ open, handleClose }) => {
  const {user, setUser} = useAuth();
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [secretUrl, setSecretUrl] = useState('');
  const [isActivating, setIsActivating] = useState(false); // Estado para controlar si estamos activando 2FA

  useEffect(() => {
    if (open) {
      setIs2FAEnabled(user?.mfa || false); // Cuando se abre el modal, usar el estado mfa del usuario
      setError('');
      setCode('');
      setSecretUrl('');
    }
  }, [open, user?.mfa]);

  const handleGenerateQR = async () => {
    try {
      const res = await generarQR(user.usuario); 
      setSecretUrl(res.data.mfaUrl); 
      setIsActivating(true); 
    } catch (error) {
      setError(error.message || 'Error al activar 2FA');
      return;
    }
  };

  const handleDeactivate2FA = async () => {
    if (code.length !== 6) {
      setError('El código debe tener 6 dígitos');
      return;
    }
    try {
      const res = await desactivar2FA(user.usuario, code); // Desactivar 2FA
      if (res.statusCode === 200) {
        alert('2FA desactivado correctamente');
        setIs2FAEnabled(false); 
        const updatedUser = { ...user, mfa: false };
        setUser(updatedUser);
        setIsActivating(false);
      }
    } catch (error) {
      setError(error.message || 'Error al desactivar 2FA');
      return;
    }
    handleClose();
  };

  const handleActivar2FA = async () => {
    if (isActivating) {
      if (code.length !== 6) {
        setError('El código debe tener 6 dígitos');
        return;
      }
      try {
        const res = await activar2FA(user.usuario, code, setUser);
        console.log(res);
        if(res.statusCode === 200){
            alert('Autenticación 2FA activada');
            setIs2FAEnabled(true);
            setIsActivating(false); 
        }
      } catch (error) {
        setError(error.message || 'Error al verificar 2FA');
        return;
      }
    }
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        sx: { backdropFilter: 'blur(6px)' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          background: 'linear-gradient(90deg, rgb(175, 125, 193) 0%, rgba(217,111,255,1) 69%)',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant='h6' textAlign='center' color='white' mb={2}>
          Autenticación en Dos Pasos (2FA)
        </Typography>
        <Stack spacing={2}>
          {/* Botón para activar o desactivar 2FA */}
          {!is2FAEnabled ? (
            <Button
              variant='contained'
              onClick={handleGenerateQR}
              sx={{
                color: 'white',
                background: 'linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)',
              }}
            >
              Generar QR
            </Button>
          ) : (
            <>
                <Button
                variant='contained'
                onClick={handleDeactivate2FA}
                sx={{
                    color: 'white',
                    background: 'linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)',
                }}
                >
                Desactivar 2FA
                </Button>
                <TextField
                    fullWidth
                    label='Código de Verificación'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    margin='normal'
                    sx={{ bgcolor: 'white', borderRadius: '8px' }}
            />
          </>
          )}

          {/* Mostrar QR solo si estamos activando 2FA */}
          {isActivating && secretUrl && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <QRCodeSVG value={secretUrl} />
              <Typography color="white" textAlign="center" mt={2}>
                Escanea este QR con tu aplicación de autenticación
              </Typography>
                <TextField
                fullWidth
                label='Código de Verificación'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                margin='normal'
                sx={{ bgcolor: 'white', borderRadius: '8px' }}
                />
                <Button
              variant='contained'
              onClick={handleActivar2FA}
              sx={{
                color: 'white',
                background: 'linear-gradient(90deg, rgba(30,69,95,1) 9%, rgba(0,186,130,1) 84%)',
              }}
             >
              Activar 2FA
            </Button>
            </div>
            
          )}
          {/* Mostrar el mensaje de error */}
          {error && <Typography color='error'>{error}</Typography>}

          {/* Mostrar el botón de "Guardar" solo si se está activando y el QR está generado */}
         
        </Stack>
      </Box>
    </Modal>
  );
};

export default Modal2FA;
