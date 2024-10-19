import React from 'react';
import Router from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routers>
        <Route path='/' element={Home} />
        <Route path='/about' element={About} />
      </Routers>
      <Footer />
    </div>
  );
}

export default App;