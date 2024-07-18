import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import "./search.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <img src={searchIcon} alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

export default Search;
