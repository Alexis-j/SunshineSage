import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { SearchBarWrapper, SearchInput, SearchButton, LocateButton } from "./styles";

const SearchBarCompact = ({ onSearch, onUseLocation }) => {
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
      {onUseLocation && (
        <LocateButton onClick={onUseLocation} title="Use my location">
          <MapPin size={16} />
        </LocateButton>
      )}
      <SearchButton onClick={handleSearch}>
        <Search size={16} />
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBarCompact;
