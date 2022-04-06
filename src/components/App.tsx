import React from 'react';
import './App.css';
import Navbar from './Navbar'
import TableData from './TableData';
import TableSearch from './TableSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <TableSearch />
      <TableData />

    </div>
  );
}

export default App;
