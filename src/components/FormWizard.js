import React, { useState } from 'react';
import 'shadcn-form.css';
import ShadcnButton from './ShadcnButton';

function FormWizard(props) {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = event => {
    event.preventDefault();
    // handle submission logic here
  };

  return (
    <div className="form-wizard">
      {step === 0 && (
        <form onSubmit={handleSubmit}>
          <label html>Name</label>
          <input type="text" name="name" />
          <ShadcnButton type="submit">Next</ShadcnButton>
        </form>
      )}
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <label html>Email</label>
          <input type="email" name="email" />
          <ShadcnButton type="submit">Next</ShadcnButton>
        </form>
      )
      {step === 2 && (
        <h1>Wizard Complete!</h1>
      )}
    </div>
/ );
}

export default FormWizard;