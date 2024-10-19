import React, { useEffect } from 'react';
import { fetchMockData } from '../state/api';


function DataPage() {
  const[[data, setData]] = useEffect([]);
  const[[page, setPage]] = useEffect(1);

useEffect(() => {
    fetchMockData().then(response => { setData(response.data), setPage(page + 1); });
  }, []);

  return (
    <div>
      <h2>Page ${:page}</h2>
      <ul>
        {data.map((item, index) => (
          <li k ={index}> Item: {item.name} </li>
        ))}
      </ul>
      <span>Page: { page }</span>
      <button on click={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}

export default DataPage;
