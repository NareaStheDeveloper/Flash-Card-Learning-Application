import React from "react";
import { Link } from "react-router-dom"
import CreateDeckButton from "./Home/CreateDeckBtn";

import "./Layout.css";

function Header() {
  return (
    <div>
      <nav className="navbar main-navbar navbar-expand-md shadow fixed-top">
      <Link
        className="navbar-brand logo text-dark font-weight-bold"
        to="/"
      >
        <h1 className="header">
          <span className="header-letter pb-2">i</span>Know</h1>
         <h2 className="header-text">Know The Flashcard Difference.</h2>
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="justify-content-end"><CreateDeckButton /></div>
</nav>
    </div>
  );
}

export default Header;
