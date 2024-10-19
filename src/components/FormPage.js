import React, { useState } from 'react';
import { submitFormData } from '../state/mockBackend';

function FormPage() {
  const[formData, setFormData] = useState({'name': '', 'email': ''});
  const[message, setMessage] = useState('');

const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await submitFormData(formData);
      setMessage(response.message);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h1>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={formData.name} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={formData.email} onChange={handleInput} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default FormPage;
