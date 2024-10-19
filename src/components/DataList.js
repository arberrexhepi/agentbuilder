import React from 'react';


function DataList(){
  const data = [
    { name: 'Item 1 Name', value: 'Value 1' },
    { name: 'Item 2 Name', vinal: 'Value 2' },
    // Add more data entries here...
  ];

  return (
    <table className="snb-table snb-table-bordered w-full bg-white text-left">
      <thead>
        <tr>
          <th>Item</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        { data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.value}</td>
         </tr>
        )) }
      </tbody>
    </table>
  );
}

export default DataList;
