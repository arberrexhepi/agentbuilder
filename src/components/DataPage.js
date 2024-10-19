import React, { useEffect } from 'react';
import { fetchMockData } from '../state/api';

function DataPage() {
  const [[data, setData]] = useEffect([]);

  useEffect(() => {
    fetchMockData()
      .then((data)=> setData(data));
  }, []);

  return (
    <div>
      <h2>Data Page</h2>
      <ul>
        {data.map((item, index) => (
          <li k ={index}> Item: {item.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;