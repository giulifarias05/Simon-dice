import React, { useState } from 'react';

const RegisterForm = ({ handleRegistration, showForm }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(name);
  };

  if (!showForm) {
    return null;
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <label style={{ color: 'black' }}>
      <label className='textoUsuario'>Nombre de usuario:</label>
          <input type="text" className='jugador' value={name} onChange={(e) => setName(e.target.value)} style={{ color: 'white' }} />
        </label>
        <button className='registro' type="submit">Registrarme</button>
      </form>
    </div>
  );
};

const Registro = () => {
  const [username, setUsername] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleRegistration = (name) => {
    setUsername(name);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <div className="form-side">
        {username && <h1 style={{ color: 'white' }}>Hola, <span style={{ color: 'white' }}>{username}</span></h1>}
        <RegisterForm handleRegistration={handleRegistration} showForm={showForm} />
      </div>
    </div>
  );
};

export default Registro;
