import { useState } from "react";
import { Search } from "lucide-react";
import { SearchBarWrapper, SearchInput, SearchButton } from "./styles";

const SearchBarCompact = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <SearchButton onClick={handleSearch}>
        <Search size={16} />
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBarCompact;
