import { useState, useContext, createContext } from "react";

const SearchInput = createContext();

export function Searchinputfun(props) { // Use "props" instead of "{ Children }"
  const [userinput, setuserinput] = useState('');
  return (
    <SearchInput.Provider value={{ userinput, setuserinput }}>
      {props.children}
    </SearchInput.Provider>
  );
}

export function UserEntertedInput() {
  return useContext(SearchInput);
}
