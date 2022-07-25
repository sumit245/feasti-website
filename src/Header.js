import React from "react";
import Logo from "./assets/logo_feasti1.png"
export default function Header() {
  return (
    <nav className="navbar navbar-light mt-n2 py-0">
      <a href="/" className="navbar-brand" style={{fontWeight:'bold'}}>
        <img src={Logo} width={48} height={48} className="d-inline-block align-center" alt="" />
        Feasti
      </a>
      <a
        href="/become-chef"
        className="btn btn-danger float-right mx-2"
        style={{ borderRadius: 40 }}
      >
        Become a chef
      </a>
    </nav>
  );
}
