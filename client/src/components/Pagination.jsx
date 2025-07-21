import React from "react";
import DataTable from 'react-data-table-component'

const Pagination = () => {

  const data = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

  const columns = [
    {
        name : 'ID',
        selector : row => row.id,
        sortable : true
    },
    {
        name : 'Name',
        selector : row => row.name,
        sortable : true
    },
    {
        name : 'Email',
        selector : row => row.email
    }
  ]

  console.log(data)

  return <div>
    <DataTable 
      title = "user List"
      columns={columns}
      data={data}
      pagination
      paginationPerPage={5}
      style={{ width: '75vw', backgroundColor: '#f0f0f0' }}
    />
  </div>;
};

export default Pagination;
