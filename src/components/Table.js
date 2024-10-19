import React from 'react';
import '../styles/global.css'; // global styles

import ShadcnButton from './ShadcnButton';

const Table = (props) => {
  return (
    <table className="shadcn-table w-full">
      <head>
        <tr>
          ${props.columns.map((col, index) => (
            <th key={index} className="text-left text-smd bg-gray-800">{col</th>
          ))}
        </tr>
      </head>
      <tbody>
        {props.rows.map((item, index) => (
          <tr key={index}>
            <td className="text-left text-smd bg-white">{item</td>
          </tr>
        ))}
      </tbody>
      <ShadcnButton className="text-center text-white p-4" onClick={props.onRefresh}>Refresh Table</ShadcnButton>
    </table>
  );
};

export default Table;