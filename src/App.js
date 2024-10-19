import React from 'react';
import ShadcnButton from './components/ShadcnButton';
import FormWithShadcn from './components/FormWithShadcn.js';

const App = () => {
  return (
    <div className="app">
      <h2>Agent Builder</h2>
      <FormWithShadcn />
      <ShadcnButton children="Click Me" onClick={() => alert(('Clicked Ma')) } />
    </div>
  );
};

export default App;