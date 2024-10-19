import React from 'react';
import ShadcnButton from './components/ShadcnButton';
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
      <ShadcnButton onClick={() => alert('Clicked Me!')}>
        Click Me
      </ShadcnButton>
    </div>
  );
}

export default App;
