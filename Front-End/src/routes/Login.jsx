import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://bottled-drinks-api.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
        body: JSON.stringify({ 
          email: email,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();

        const userData = {
          id: data.id,
          name: data.fullName,
          email: data.email
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userId', data.id);
        navigate('/user');

      } else {
        const errorText = await response.text();
        setError(errorText || 'Email ou senha inválidos.');
      }
    } catch (error) {
      setError('Falha ao se conectar ao servidor. Tente novamente mais tarde.');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;