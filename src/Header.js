import React from "react";

export default function Header() {
  return (
    <nav className="navbar mx-2">
      <a href="/" className="text-decoration-none">

      <h3 className="App-logo">Feasti</h3>
      </a>
      <a
        href="/become-chef"
        className="btn btn-danger float-right"
        style={{ borderRadius: 40 }}  //
      >
        Become a chef
      </a>
    </nav>
  );
}
