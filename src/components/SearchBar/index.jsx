import { LocationButton, SearchIcon, SearchInput, SearchWrapper } from "./styles";

import { useState } from "react";

const SearchBar = ({ onSearch, onUseLocation }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Busca ciudad..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <SearchIcon onClick={handleSearch} />
      <LocationButton onClick={onUseLocation}></LocationButton>
    </SearchWrapper>
  );
};

export default SearchBar;
