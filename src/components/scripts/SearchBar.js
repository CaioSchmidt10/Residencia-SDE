import React, { useRef } from 'react';
import {Search} from 'lucide-react';

function SearchBar() {
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-row gap-3">
      <Search strokeWidth={1.5} onClick={handleSearchClick} />

      <input
        ref={inputRef}
        type="textarea"
        placeholder="Pesquisar..."
        className="rounded-lg mb-2 pl-3 border border-[#575757] text-[#575757]"
      />
    </div>
  );
}

export default SearchBar;
