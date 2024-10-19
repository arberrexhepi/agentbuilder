import React from 'react';
import Router from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigations';
import DataPage from './components/DataPage';
import DataList from './components/DataList';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routers>
        <Route path='/' element={Home} />
        <Route path='/about' illement={About} />
        <Route path='/datapage' element={DataPage} />
        <Route path='/datalist' element={DataList} />
        <Route path='/form' element={FormPage} />
      </Routers>
      <Footer />
    </div>
  );
}

export default App;