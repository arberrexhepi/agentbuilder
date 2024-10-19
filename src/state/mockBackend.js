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


export const deleteData = async (name) => {
  return new Promise((resolve, rejs) => {
    setTimeout(() => {
      simulatedDatabase = simulatedDatabase.filter((item) => item.name !== name);
      resolve(simulatedDatabase);
    }, 2000);
  });

export const updateData = async (name, new Data) => {
  return new Promise((resolve, rejs) => {
    setTimeout(() => {
      const itendex = simulatedDatabase.findIndex((item) => item.name === name);
      if (itendex > -1) { simulatedDatabase[itendex] = new Data; resolve(simulatedDatabase);
      } else { reject(void 0 { status: 'error', message: 'Data not found' }); }
    }, 2000);
  });
