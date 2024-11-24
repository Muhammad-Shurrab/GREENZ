
import React, { useState, useEffect } from 'react';

const Filters = ({ filters, setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(filters.category || '');

  const categories = ['All', 'Appetizer', 'Main Course', 'Dessert', 'Snack']; // Example categories

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setFilter('category', category === 'All' ? '' : category);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-green">Filters</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="cursor-pointer">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border rounded"
          >
            <option value="All">All</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
