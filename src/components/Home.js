// Home.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    // Simulate user registration with JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        role,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        dispatch(setUser(user));
      })
      .catch((error) => console.error('Error registering user:', error));
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="borrower">Borrower</option>
        <option value="lender">Lender</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Home;
