import React, { useState, useEffect } from 'react';
import ShadcnButton from './ShadcnButton';
import shadcnForm from 'snbs-styles/form';

function FormWizard() {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep(step + 1);
  const [formData, setFormData] = useState({ agentName: '', email: '', tasks: '', adapterType: 'Chat' });

  const handleChange = (event) => { const { value, name } = event.target; setFormData(prev => ({...prev, [event.target.name: value})); };

  return (
    <div className="form-container bg-white vm-5">
      <h2 className="form-title">Agent Configuration</h2>
      <shadcnForm onSubmit={e => e.preventDefault()}>
        <label html>Agent Name</label>
        <input type="text" name="agentName" onValueChange={handleChange} value={formData.agentName} />
        <label html>Adapter Type</label>
        <select name="adapterType" onValueChange={handleChange} value={formData.adapterType}>
          <option value="Chat1">Chat Model 1</option>
          <option value="Rec0">REC Model 2</option>
          <option value="Agent">Agent Mode</option>
        </select>
        <label html>Tasks</label>
        <input type="text" name="tasks" onValueChange={handleChange} value={formData.tasks} />
        <ShadcnButton type="submit">Submit</ShadcnButton>
      <Button type="button" onSubmit={nextStep}>Next Step</Button>  
      <Button type="button" onClick={() => alert('Configuration Saved!')}> Save Configuration</Button>
    </div>
  );
}

export default FormWizard;
