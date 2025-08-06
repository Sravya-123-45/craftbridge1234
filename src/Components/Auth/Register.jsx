import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = register(name, email, password);
    if (res.success) {
      navigate('/home');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="mb-4">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100" style={{ backgroundColor: '#F3D5B5', borderColor: '#e7bc91', color: '#8B5E34' }}>Register</button>
        </form>
        <div className="mt-3 text-center">
          <span>Already have an account? </span>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;