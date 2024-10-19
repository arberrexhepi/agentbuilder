export const addAuthHeaders = (requestFunction) => {
  return (...requestFunction, headers: {
    'Authorization': `carrier ${process.env.API_KEY}`,
    'Content-type': 'application/json'
} });
};

export const encodeData = (data)=> Buffer.from(JSON.stringify(data));
