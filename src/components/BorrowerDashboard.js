// BorrowerDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTransactions } from '../redux/actions';

const BorrowerDashboard = () => {
  const user = useSelector((state) => state.user);
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleRequestLoan = () => {
    // Simulate loan request with JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        title: 'Loan Request',
        body: 'Please approve my loan request.',
      }),
    })
      .then((response) => response.json())
      .then((loan) => {
        const newTransaction = {
          user: user.email,
          action: 'loan_request',
          status: 'pending',
          loanId: loan.id,
        };
        dispatch(setTransactions([...transactions, newTransaction]));
      })
      .catch((error) => console.error('Error requesting loan:', error));
  };

  return (
    <div>
      <h2>Borrower Dashboard</h2>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <button onClick={handleRequestLoan}>Request Loan</button>
        </div>
      )}
      <h3>Past Loans</h3>
      <ul>
        {transactions
          .filter((transaction) => transaction.user === user.email)
          .map((transaction, index) => (
            <li key={index}>{JSON.stringify(transaction)}</li>
          ))}
      </ul>
    </div>
  );
};

export default BorrowerDashboard;
