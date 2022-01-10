import React, { createRef, useEffect, useState } from "react";

function SearchField(props) {
  const inputRef = createRef();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    inputRef.current.focus();
    const currentInput = inputRef.current;
    return () => {
      currentInput.value = "";
    };
  }, [inputRef, searchTerm]);

  return (
    <>
      <input type="text" ref={inputRef} placeholder="search" />
      <button onClick={() => setSearchTerm(inputRef.current.value)}>🔎</button>
    </>
  );
}

export default SearchField;
