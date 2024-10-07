import React from 'react';
import AppProvider from './context/AppContext';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import './index.css';
import Nav from './components/Nav';


const App = () => {
  return (
    <AppProvider>
      <Nav/>
      <Header />
      <main style={{ padding: '20px' }}>
        <AppRoutes />
      </main>
    </AppProvider>
  );
};

export default App;


