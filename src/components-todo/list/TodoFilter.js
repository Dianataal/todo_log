import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const selectedPriority = event.target.value;
    onFilterChange(selectedPriority);
  };

  return (
    <div className='todos-filter'>
      <div className='todos-filter__control'>
        <label>Filter by priority</label>
        <select onChange={handleFilterChange}>
          <option value='all'>All</option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
