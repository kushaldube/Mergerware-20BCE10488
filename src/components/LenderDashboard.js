// LenderDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTransactions } from '../redux/actions';

const LenderDashboard = () => {
  const user = useSelector((state) => state.user);
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleConfirmPayment = (loanId) => {
    // Simulate confirming loan payment with JSONPlaceholder
    fetch(`https://jsonplaceholder.typicode.com/posts/${loanId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Loan Confirmed',
        body: 'Loan payment confirmed.',
      }),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedTransactions = transactions.map((transaction) =>
          transaction.loanId === loanId ? { ...transaction, status: 'completed' } : transaction
        );
        dispatch(setTransactions(updatedTransactions));
      })
      .catch((error) => console.error('Error confirming payment:', error));
  };

  return (
    <div>
      <h2>Lender Dashboard</h2>
      {user && (
        <div>
          <p>Email: {user.email}</p>
        </div>
      )}
      <h3>Past Payments</h3>
      <ul>
        {transactions
          .filter(
            (transaction) =>
              transaction.user === user.email && transaction.status === 'completed'
          )
          .map((transaction, index) => (
            <li key={index}>
              {JSON.stringify(transaction)}
              <button onClick={() => handleConfirmPayment(transaction.loanId)}>
                Confirm Payment
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LenderDashboard;
