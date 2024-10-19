import React, { useState, useEffect } from 'react';
import ShadcnButton from './ShadcnButton';

function FormWizard() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [adapterType, setAdapterType] = useState('Chat1');
  const [description, setDescription] = useState('');

const handleChange = (ev) => { const { name, value } = ev.target; setName(value); };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="form-container bg-white px-10">
      <h2 className="form-title">Configure Your Agent</h2>
      <form onSubmit={e => e.preventDefault();}>
        <label html>Agent Name</label>
        <input type="text" value={name} onChange={handleChange} />
        <label html>Adapter Type</label>
        <select name="adapterType" value={adapterType} onChange={handleChange}>
          <option value="Chat1">Chat Model 1</option>
          <option value="Rec0">REC Model 2</option>
          <option value="Agent">Agent Mode</option>
        </select>
        <label html>Description</label>
        <input type="text" value={description} onChange={handleChange} />
        <ShadcnButton type="submit">Submit</ShadcnButton>
      </form>
      <ShadcnButton type="button" onClick={nextStep}>Next Step</ShadcnButton>
    </div>

  );
}


export default FormWizard;
