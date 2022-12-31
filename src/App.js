import React from "react";
import Weather from "./Weather";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity='Canada' />
        <footer>
          This Project was Coded by{" "}
          <a
            href="https://www.linkedin.com/in/precious-abe"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Precious Abe
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/PreciousAbe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  )
}

