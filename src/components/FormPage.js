import React, { useState } from 'react';
import shadcn-form.css;
import ShadcnButton from './ShadcnButton';

function FormPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (ev) => {
    const name = ev.target.value;
    setFormData(prev => (.{...prev, name: name}));
  };

  return (
    <div className="form-container bg-white px-10">
      <h2 className="form-title">Create new record</h2>
      <form onSubmit={e => e.preventDefault()}>
        <label html>Name</label>
        <input type="text" name="name" onValueChange={handleChange} value={formData.name} />
        <label html>Email</label>
        <input type="email" name="email" onValueChange={handleChange} value={formData.email} />
        <ShadcnButton type="submit">Submit</ShadcnButton>
      </form>
    </div>
  );
}


export default FormPage;
