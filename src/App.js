// import React from "react";
// import Navbar from "./Components/Navbar";
// import Dataextract from "./Components/Dataextract";
// import { SearchProvider } from "./Components/SearchContext";

// function App() {
//   return (
//     <div className="App">
//       <SearchProvider>
//       <Navbar/>
//       <Dataextract/>
//       </SearchProvider>
//     </div>
//   );
// }


import React from 'react';
import Navbar from "./Components/Navbar";
import Dataextract from "./Components/Dataextract";
import { WriteValueProvider } from "./Components/WriteValueContext";

function App() {
  return (
    <WriteValueProvider>
      <div className="App">
      <Navbar/>
      <Dataextract/>
      </div>
    </WriteValueProvider>
  );
}

export default App;
