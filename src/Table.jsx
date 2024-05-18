import React, { useState, useEffect } from 'react';

const initialData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210' },
  { id: 1, name: 'Amir', email: 'john@example.com', phone: '1234567890' },
  { id: 2, name: 'zeenat', email: 'jane@example.com', phone: '9876543210' },
  { id: 1, name: 'Supriya', email: 'john@example.com', phone: '1234567890' },
  { id: 2, name: 'kajal', email: 'jane@example.com', phone: '9876543210' },
  // Add more data as needed
];

const TableApp = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    debugger
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const handleSearch = (e) => {
   setTimeout(()=> setSearchTerm(e.target.value),3000)
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedData = filteredData.sort((a, b) => {
    if (sortBy !== '') {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('phone')}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableApp;
