import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import BorrowerDashboard from './components/BorrowerDashboard';
import LenderDashboard from './components/LenderDashboard';

function App() {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home users={users} setUsers={setUsers} />} />
          <Route
            path="/admin"
            render={() => <AdminDashboard transactions={transactions} />}
          />
          <Route
            path="/borrower"
            render={() => (
              <BorrowerDashboard
                users={users}
                transactions={transactions}
                setTransactions={setTransactions}
              />
            )}
          />
          <Route
            path="/lender"
            render={() => (
              <LenderDashboard
                users={users}
                transactions={transactions}
                setTransactions={setTransactions}
              />
            )}
          />
        </Switch>
      </div>
      <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* ... other routes ... */}
          </Switch>
        </div>
      </Router>
      </Provider>
    </Router>
  );
}

export default App;
