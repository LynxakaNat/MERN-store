
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    }

    const handleSearchSubmit = (event) => {
      event.preventDefault();
      console.log(`Searching for: ${searchQuery}`);
      window.location.href=`http://localhost:3000/product/${searchQuery}`
      // Add your search functionality here
    }
  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" value={searchQuery}
        onChange={handleSearchInputChange}  placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
