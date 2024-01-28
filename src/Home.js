import React, { useState } from 'react';

const Home = ({ users, setUsers }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    // Implement user registration logic
    const newUser = { email, role };
    setUsers([...users, newUser]);
    setEmail('');
    setRole('');
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
