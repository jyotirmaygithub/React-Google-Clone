import { useState, useContext, createContext } from "react";

const SearchInput = createContext();

export function Searchinputfun(props) { // Use "props" instead of "{ Children }"
  const [userinput, setuserinput] = useState('');
  const [searchTerm ,setsearchTerm] = useState('')
  const [display, setdisplay] = useState(false);
  return (
    <SearchInput.Provider value={{ userinput, setuserinput, searchTerm,setsearchTerm ,display,setdisplay}}>
      {props.children}
    </SearchInput.Provider>
  );
}

export function UserEntertedInput() {
  return useContext(SearchInput);
}
