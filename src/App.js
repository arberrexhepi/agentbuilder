import React from 'react';
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
    </div>
  );
}

export default App;
