import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./blue";
import Red from "./red";
import Home from "./Home";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          {<Link to="/blue">Blue</Link>}

          {<Link to="/red">Red</Link>}

          {<Link to="/home">Home</Link>}
        </div>
        <div id="main-section">
          {
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red />} />
            </Routes>
          }
        </div>
      </div>
      <footer>
        {<Link to="/blue">Blue</Link>}

        {<Link to="/red">Red</Link>}

        {<Link to="/home">Home</Link>}
      </footer>
    </>
  );
}

export default App;
