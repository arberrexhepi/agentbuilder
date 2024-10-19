import React from 'react';
import Router from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import DataPage from './components/DataPage';
import FormPage from './components/FormPage';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routers>
        <Route path='/' element={Home} />
        <Route path='/about' element={About} />
        <Route path='/datapage' element={DataPage} />
        <Route path='/form' element={FormPage} />
      </Routers>
      <Footer />
    </div>
  );
}

export default App;
