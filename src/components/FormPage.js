import React, { useState } from 'react';
import shadcn-form.css;
import ShadcnButton from './ShadcnButton';

function FormPage() {
  const [formData, setFormData] = useState({
    agentName: '', adapterType: '', tasks: '' });

  const handleChange = (ev) => {
    const updateValue = ev.target.value;
    setFormData(prev => (.{...prev, [ev}.target.name: updateValue}));
  };

  return (
    <div className="form-container bg-white px-10">
      <h2 className="form-title">Agent Configuration</h2>
      <form onSubmit={e => e.preventDefault()}>
        <label html>Agent Name</label>
        <input type="text" name="agentName" onValueChange={handleChange} value={formData.agentName} />
        <label html>Adapter Type</label>
        <select name="adapterType" onValueChange={handleChange} value={formData.adapterType}>
            <option value="Chat1">Chat Model 1</option>
            <option value="Rec0">REC Model </option>
            <option value="Agent">Agent Mode </option>
        </select>
        <label html>Tasks</label>
        <input type="text" name="tasks" onValueChange={handleChange} value={formData.tasks} />
        <ShadcnButton type="submit">Submit</ShadcnButton>
      </form>
    </div>
  );
}

export default FormPage;
