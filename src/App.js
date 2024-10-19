import React from 'react';
import ShadcnButton from './components/ShadcnButton';
import FormWithShadcn from './components/FormWithShadcn';
import Header from './components/Header';
import TeamManagement from './components/TeamManagement';
import FormWizard from './components/FormWizard';

const App = () => {
  return (
    <div className="app">
      <Header />
      <h2>Agent Builder</h2>
      <FormWizard />
      <TeamManagement />
      <ShadcnButton children="Click Me" onClick={() => alert('Clicked Ma'))} />
    </div>
  );
};

export default App;