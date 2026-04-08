import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      setIsLoggedIn(true);
      const parsedUser = JSON.parse(savedUser);
      setUsername(parsedUser.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Página de Usuário</h1>

      {isLoggedIn ? (
        <div>
          <h2>Bem-vindo, {username}! 🥤</h2>
          <p>Aqui estão seus drinks favoritos...</p>
          <button onClick={handleLogout} style={{ marginTop: '20px' }}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Você não está logado.</h2>
          <p>Faça o log in ou registre-se.</p>
          <div style={{ marginTop: '20px' }}>
            {/* Assuming you are using react-router-dom */}
            <Link to="/login" style={{ marginRight: '10px' }}>Go to Login</Link>
            <Link to="/register">Registrar-se</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;