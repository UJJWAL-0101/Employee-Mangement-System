import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username,password)
    
    if (username === 'admin' && password === 'password') {

      navigate('/dashboard')
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
    <h1 className='head1'>Login Page</h1>  

    <div className="login">
      {/* <h1>Login</h1> */}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        />
        {/* <br /> */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
        />
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit ">Login</button>
      </form>
    </div>
    </>
  );
}

export default LoginPage;