const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Get Weather</button>
    </div>
  );
};

export default SearchBar;
