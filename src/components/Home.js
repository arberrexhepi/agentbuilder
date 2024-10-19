import React, { useEffect } from 'react';
import { fetchMockData } from '../state/api';

function Home() {
  const [[data, setData]] = useEffect([]);

  useEffect(() => {
    fetchMockData()
      .then((data)=> setData(data));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map((item, index) => (
          <li k ={index}> Item: {item.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
