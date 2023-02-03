import React from "react";
import Logo from "./assets/logo_feasti1.png"
export default function Header() {
  return (
    <nav className="navbar navbar-light mt-n2 py-0">
      <img
        src={Logo}
        width={48}
        height={48}
        alt=""
        loading="lazy"
      />
      <a
        href="/become-chef"
        className="btn btn-danger float-right"
        style={{
          borderRadius: 12,
          marginRight: 2,
          height: 28,
          width: 100,
          padding:0
          // fontSize: 12,
          
        }}
      >
        Be a chef
      </a>
    </nav>
  );
}
