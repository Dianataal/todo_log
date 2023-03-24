import React from 'react';

import './TodoFilter.css';

const TodoFilter = () => {
    return (
        <div className='todos-filter'>
            <div className='todos-filter__control'>
                <label>Filter by priority</label>
                <select>
                    <option value='low'>low</option>
                    <option value='medium'>medium</option>
                    <option value='high'>high</option>
                </select>
            </div>
        </div>
    );
};

export default TodoFilter;