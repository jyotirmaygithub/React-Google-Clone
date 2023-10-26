import React from "react";
import Navbar from "./Components/Navbar";
import { Searchinputfun } from "./Context/SearchContext";
import Category from "./Components/Category";
import Links from "./Pages/Links";
import Imagedata from "./Pages/Images";
import News from "./Pages/News";
import Video from "./Pages/Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Searchinputfun> 
          <Navbar />
        <Router>
          <Category />
          <Routes>
            <Route exact path="/" element={<Links />} />
            <Route exact path="/images" element={<Imagedata />} />
            <Route exact path="/news" element={<News/>}/>
            <Route exact path="/videos" element={<Video/>}/>
          </Routes>
        </Router>
      </Searchinputfun>
    </div>
  );
}
