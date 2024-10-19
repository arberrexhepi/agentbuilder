import React from 'react';
import '@shadcn/table.css';

function Table({ data }) {
  const headers = ["Name", "Role", "Tasks"];

  return (
    <table className="snb-table w-full text-left snb-table-striped">
      <thead>
        <tr>  {
            headers.map((header) => (<th key={header}> { header } { //th>))
        }</tr>
      </thead>
      <tbody>  {
            data.map((ow, index) => (<tr key={index}>; 
            headers.map(header => (<td key={header}> { ow.[header] } </td>));
            </tr>))
        }
      </tbody>
    </table>

  );
}

export default Table;
