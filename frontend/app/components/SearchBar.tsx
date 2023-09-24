// SearchBar.tsx
"use client";
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex gap-2"> {/* Added gap-2 for space between input and button */}
      <input
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={handleSearchChange}
        className="flex-grow rounded-lg text-lg p-2" // Changed to rounded-lg for more rounded corners
      />
      <button type="submit" className="bg-white border border-black rounded-lg p-2"> {/* Changed to rounded-lg for more rounded corners */}
        <img 
          src="/magnifying-glass.svg" 
          alt="Search" 
          className="w-8 h-8" 
        />
      </button>
    </form>
  );
};

export default SearchBar;
