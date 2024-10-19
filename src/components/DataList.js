import React, { useEffect, useState } from 'react';
import { getSubmittedData } from '../state/mockBackend';

function DataList() {
  const[data, setData] = useState([]);
  const[limit, setLimit] = useState(10);

  useEffect(() => {
    getSubmittedData().then((data) => {
      setData(data);
      setLimit(10); // limit displaying to 10 items
    }); }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.slice(0, limit).map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
