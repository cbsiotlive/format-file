import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import Form from '../containers/Form';
import Watch from '../containers/Watch';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/add" element={<Form />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

