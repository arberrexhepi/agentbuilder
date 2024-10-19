import React, { useState } from 'react';
import 'shadcn-form.css';
import ShadcnButton from './ShadcnButton';

function FormWithShadcn() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (ev) => {
    const name = ev.target.value;
    setFormData(prev => ({...prev, name: name}));
  };

  return (
    <form onSubmit={e => { e.preventDefault();
      // handle form submission here
    }}>
      <label html>Name</label>
      <input type="text" name="name" onValueChange={handleChange} value={formData.name} />
      <label html>Email</label>
      <input type="email" name="email" onValueChange={handleChange} value={formData.email} />
      <ShadcnButton type="submit">Submit</ShadcnButton>
    </form>
);
}

export default FormWithShadcn;