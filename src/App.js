import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {

  return (
    <div className="app">
      <NavBar /> {/* NavBar is always out of CSS flow */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
