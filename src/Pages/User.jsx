import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';

// Estilos personalizados
const UserContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '20px',
});

const UserForm = styled('form')({
  backgroundColor: '#844184',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '80%',
  maxWidth: '500px',
  marginTop: '20px',
  textAlign: 'center',
});

const UserTitle = styled('h2')({
  fontSize: '24px',
  marginBottom: '10px',
  color: '#fff',
});

const FormGroup = styled('div')({
  marginBottom: '15px',
  textAlign: 'left',
  width: '100%',
});

const Label = styled('label')({
    color: '#fff',
    display: 'block',
    fontSize: '16px',
    marginBottom: '5px',
});

const Input = styled('input')({ 
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  '&:focus': {
    borderColor: '#844184',
    outline: 'none',
  },
});

const AvatarContainer = styled('div')({
  marginBottom: '20px',
});

const AvatarImage = styled('img')({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '10px',
});

const Button = styled('button')({
  backgroundColor: '#844184',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#6b2366',
  },
});

export default function User() {
  // Datos de usuario proporcionados, incluyendo el avatar actual
  const [userData, setUserData] = useState({
    name: 'Jose Manuel Martinez Martinez',
    email: 'chema@mail.com',
    username: 'ChemaDev',
    joinDate: '2025-01-15',
    avatar: '/avatar.png', // Avatar predeterminado
  });

  // Simula la carga de datos de usuario, puedes sustituirlo por una llamada a API.
  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los datos del usuario.
    // setUserData(apiData);
  }, []);

  // Maneja la actualización de los datos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Maneja la carga de imagen de avatar
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, avatar: reader.result });
      };
      reader.readAsDataURL(file); // Leer la imagen como URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer la lógica de actualización de datos, como una llamada a una API
    console.log('Datos actualizados:', userData);
  };

  return (
    <UserContainer>
      <UserForm onSubmit={handleSubmit}>
        <UserTitle>Editar Perfil de {userData.name}</UserTitle>

        {/* Avatar actual */}
        <AvatarContainer>
          <AvatarImage src={userData.avatar} alt="Avatar" />
          <Label htmlFor="avatar">Cambiar Avatar</Label>
          <Input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </AvatarContainer>

        <FormGroup>
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="username">Nombre de usuario</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="joinDate">Fecha de registro</Label>
          <Input
            type="text"
            id="joinDate"
            name="joinDate"
            value={userData.joinDate}
            onChange={handleInputChange}
            disabled
          />
        </FormGroup>

        <Button type="submit">Guardar cambios</Button>
      </UserForm>
    </UserContainer>
  );
}
