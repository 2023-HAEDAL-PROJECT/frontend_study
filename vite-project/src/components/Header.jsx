import React from "react";
import "../styles/Header.css";
import Nav from "./Nav";
import ReactDOM from "react-dom";

export default function Header() {
  return (
    <>
      <header className="Header-wrapper">
        <div className="Header-container">
          <Nav />
        </div>
      </header>
    </>
  );
}
