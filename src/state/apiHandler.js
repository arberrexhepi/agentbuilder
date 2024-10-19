import axios from 'axios';

const apiUrl = 'https://real-backend-api.com';

export const submitFormData = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/created, data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to submit data');
  }
};

export const getSubmittedData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/fetchedd`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
};

export const deleteData = async (identifier) => {
  try {
    const response = await axios.delete(`${apiUrl}/deleted/${identifier}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to delete data');
  }
};
