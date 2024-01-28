import React from 'react';

const AdminDashboard = ({ transactions }) => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{JSON.stringify(transaction)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
