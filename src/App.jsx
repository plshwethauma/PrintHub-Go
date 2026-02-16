import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Payment from './pages/Payment';
import Status from './pages/Status';
import Locker from './pages/Locker';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="payment" element={<Payment />} />
          <Route path="status" element={<Status />} />
          <Route path="locker" element={<Locker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
