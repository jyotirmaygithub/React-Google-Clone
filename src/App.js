import React from "react";
import Navbar from "./Components/Navbar";
import Dataextract from "./Components/Dataextract";
import { Searchinputfun } from "./Context/SearchContext";
import Imagedata from "./Components/Imagedata";

export default function App() {
  return (
    <Searchinputfun>
      <div className="App">
        <Navbar />
        <Imagedata />
      </div>
    </Searchinputfun>
  );
}
