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
        <label>
          Nombre de usuario:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button className='registro' type="submit">Registrarme</button>
      </form>
    </div>
  );
};

const App = () => {
  const [username, setUsername] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleRegistration = (name) => {
    setUsername(name);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <div className="roulette-container">
        {/* Aquí va el contenido de la ruleta */}
      </div>
      <div className="form-side">
        {username && <h1>Hola, {username}</h1>}
        <RegisterForm handleRegistration={handleRegistration} showForm={showForm} />
      </div>
    </div>
  );
};

export default App;
