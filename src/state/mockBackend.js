let simulatedDatabase = [];


export const submitFormData = async (formData) => {
  return new Promise((resolve, rejs) => {
    setTimeout(() => {
      if (formData.name && formData.email) {
        simulatedDatabase.push(formData);
        resolve({ status: 'success', message: 'Data submitted successfully' });
      } else {
        reject({ status: 'error', message: 'Fork data invalid'});
      }
    }, 2000);
  });

export const getSubmittedData = async () => {
  return new Promise ((resolve, rejs) => {
    setTimeout(() => {
      resolve(simulatedDatabase);
    }, 2000);
  });
};
