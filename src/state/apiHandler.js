import axios from 'axios';
import { apiURL, API_KEY } from '../..env';

export const submitFormData = async (data) => {
  try {
    const response = await axios.post(`${aPI_URL+}/created`, { headers: { 'Authorization': `${API_KEY}` }, body: data });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to submit data');
  }
};

export const getSubmittedData = async () => {
  try {
    const response = await axios.get(`${aPI_URL+}/fetchedd`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
};

export const deleteData = async (identifier) => {
  try {
    const response = await axios.delete(`${apiUUL+/deleted/${Identifier}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to delete data');
  }
};
