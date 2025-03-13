import React, { useState, useEffect } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import './User.css';


export default function User() {
  const [userData, setUserData] = useState({
    name: 'Jose Manuel Martinez Martinez',
    email: 'chema@mail.com',
    username: 'ChemaDev',
    joinDate: '2025-01-15',
    avatar: '/avatar.png',
  });

  useEffect(() => {}, []);

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
    <Navbar/>
    <div className="user-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2 className="user-title">Editar Perfil de {userData.name}</h2>

        <div className="avatar-container">
          <img className="avatar-image" src={userData.avatar} alt="Avatar" />
          <label className="label" htmlFor="avatar">Cambiar Avatar</label>
          <input
            className="input"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="name">Nombre</label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="email">Correo electrónico</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="username">Nombre de usuario</label>
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="joinDate">Fecha de registro</label>
          <input
            className="input"
            type="text"
            id="joinDate"
            name="joinDate"
            value={userData.joinDate}
            onChange={handleInputChange}
            disabled
          />
        </div>

        <button className="button" type="submit">Guardar cambios</button>
      </form>
    </div>
    </>
  );
}
