import React from "react";
import { Link } from "react-router-dom";

function CreateDeckBreadcrumbNavBar() {
  return (
    <div className="study-nav">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default CreateDeckBreadcrumbNavBar;
