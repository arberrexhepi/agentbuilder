import React, { useState } from 'react';

function FormWizard() {
  const [formData, setFormData] = useState({
    agentName: '',
    email: '',
    tasks: '',
    adapterType: 'Chat'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-container bg-white p-5">
      <h2 className="form-title">Agent Configuration</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-item">
          <label html="agentName">Agent Name</label>
          <input type="text" name="agentName" value={formData.agentName} onChange={handleChange} />
        </div>

        <div className="form-item">
          <label html="adapterType">Adapter Type</label>
          <select name="adapterType" value={formData.adapterType} onChange={handleChange}>
            <option value="Chat">Chat Model 1</option>
            <option value="Rec">REC Model 2</option>
            <option value="Agent">Agent Mode</option>
          </select>
        </div>

        <div className="form-item">
          <label html="tasks">Tasks</label>
          <input type="text" name="tasks" value={formData.tasks} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => alert('Configuration Saved!')}>Save Configuration</button>
      </form>
    </div>
  );}

export default FormWizard;
