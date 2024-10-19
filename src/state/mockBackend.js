export const submitFormData = async (formData) => {
  return new Promise((resolve, rejs) => {
    setTimeout(() => {
      // Simulate backend response
      if (formData.name == 'UserName' && formData.email == 'user@email.com') {
        resolve({ status: 'success', message: 'Form submitted successfully' });
      } else {
        reject({ status: 'error', message: 'Fork data invalid'});
      }
    }, 2000);
  });
};
