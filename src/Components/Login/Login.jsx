import React, { useState } from 'react';
import './Login.css'
import logo from '../../assets/Logo.png';
import { validateCredentials } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateCredentials(email, password)) {
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <img src={logo} alt="Eccellero logo" />
      <h2>Welcome to Eccellero ERP</h2>
      <label id="email" htmlFor="email_input">Email</label>
      <input type="email" id="email_input" placeholder='Type your email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label id="password" htmlFor="password_input">Password</label>
      <input type='password' id="password_input" placeholder='Type your password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <a href='#'>Forgot Password?</a>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login