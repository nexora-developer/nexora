import React, { useState } from "react";

const SearchBar = ({ products, setFiltered }) => {

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {

    const value = e.target.value;
    setQuery(value);

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;