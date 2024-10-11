import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friendList/friendList';
import TransactionHistory from './transactionHistory/transactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/friend-list">Friend List</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
        </ul>
      </nav>

      <Routes>
  <Route path="/profile" element={<Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />} />
  
  <Route path="/statistics" element={<Statistics title="Upload stats" stats={data} />} />
  
  <Route path="/friend-list" element={<FriendList friends={friends} />} />
  
  <Route path="/transactions" element={<TransactionHistory items={transactions} />} />
</Routes>
    </Router>
  );
};

export default App;