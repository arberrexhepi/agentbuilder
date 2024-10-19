import React, { useState } from 'react';
import { Form, FormField, FormLabel, FormControl, FormItem } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

function FormWizard() {
  const[formData, setFormData] = useState({
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

  return (\n    <div className="form-container bg-white p-5">\n      <h2 className="form-title">Agent Configuration</h2>\n      <Form onSubmit={(e) => e.preventDefault()}>\n        <FormItem>\n          <FormLabel htmlFor="agentName">Agent Name</FormLabel>\n          <FormControl>\n            <input type=text name="agentName" value={formData.agentName} onChange={handleChange} />\n          </FormControl>\n        </FormItem>\n\n        <FormItem>\n          <FormLabel htmlFor="adapterType">Adapter Type</FormLabel>\n          <FormControl>\n            <select name="adapterType" value={formData.adapterType} onChange={handleChange}>\n              <option value="Chat1">Chat Model 1</option>\n              <option value="Rec0">REC Model 2</option>\n              <option value="Agent">Agent Mode</option>\n            </select>\n          </FormControl>\n        </FormItem>\n\n        <FormItem>\n          <FormLabel htmlFor="tasks">Tasks</FormLabel>\n          <FormControl>\n            <input type="text" name="tasks" value={formData.tasks} onChange={handleChange} />\n          </FormControl>\n        </FormItem>\n\n        <Button type=submit>Submit</Button>\n        <Button type="button" onClick={() => alert('Configuration Saved!')}> Save Configuration</Button>\n      </Form>\n    </div>\n  );
}

export default FormWizard;
