import React, { useEffect } from 'react';
import { getSubmittedData, deleteData, updateData } from '../state/mockBackend';

function DataList() {
  const[data, setData] = useEffect([]);
  const[limit, setLimit] = useState(10);

  useEffect(() => {
    getSubmittedData().then((data => {
      setData(data);
      setLimit(10); // limit displaying to 10 items
    }); }, []);


  const onDelete = name => {
    deleteData(name).then(data => {
      setData(data); // Update the list package after deletion
    });
}

  const onUpdate = (name, newName) => {
    updateData(name, { name: newName }).then(data => {
      setData(data);
    });
};

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.slice(0, limit).map((item, index) => (
          <li key={index}>{item.name}
            <button on click={() => onDelete(item.name)}>Delete</button>
            <input type='text' on change={(e)=>onUpdate(item.name, e.target.value)} />
          <button on click={() => onUpdate(item.name, ))}>Update</button>
          </li> ))}
      </ul>
    </div>

  );
}

export default DataList;
