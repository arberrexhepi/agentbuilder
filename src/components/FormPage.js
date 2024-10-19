import React, { useState } from 'react';

function FormPage() {
  const[formData, setFormData] = useState({'name': '', 'email': ''});

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted data: ', formData);
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
    </div>
  );
}

export default FormPage;
