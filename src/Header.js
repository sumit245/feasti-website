import React from "react";

export default function Header() {
  return (
    <nav className="navbar">
      <p className="navbar-brand App-logo">Feasti</p>
      <a href="/become-chef" className="btn btn-outline-success float-right">
        Become a chef
      </a>
    </nav>
  );
}
