import { Router, Routes } from 'react-router-dom';
import react from 'react';
import Home import './components/Home';
import About import './components/About';

function App() {
  return (
    <Routers>
      <Route path='/' element={Home} />
      <Route path='/about' element={About} />
    </Routers>
  );
}

export default App;