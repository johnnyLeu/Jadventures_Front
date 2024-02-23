// PatronLogin.js
import React, { useState } from 'react';

const PatronLogin = ({ handleLogin, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLoginClick = () => {
    if (username === 'admin' && validatePassword(password)) {
      console.log('Password valida:', password);
      handleLogin();
      setUsername(''); // Resetta il campo username
      setPassword(''); // Resetta il campo password
    } else {
      console.log('Password non valida:', password);
      alert('Credenziali non valide');
    }
  };

  return (
    <div>
      {!isAuthenticated && (
        <div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLoginClick}>Login</button>
        </div>
      )}
    </div>
  );
};

export default PatronLogin;
