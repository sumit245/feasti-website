import React from "react";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";

export default function Footer() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <footer className="page-footer font-small bg-danger pt-4">
      <div className="container-fluid text-md-left">
        <div className="row">
          <div className="col-sm-4">
            <a href="/" className="App-logo-big">
              Feasti
            </a>
            <div style={{ marginTop: -40, color: "white", letterSpacing: 1,fontFamily:"cursive" }}>
              There's No Taste Like Home
            </div>
          </div>
          <div className="col-sm-3">
            <ul>
              <span className="text-white" style={{ fontWeight: "bold" }}>
                Follow
              </span>
            </ul>
            <ul>
              <a
                href="https://www.facebook.com/feasti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                Facebook
              </a>
            </ul>
            <ul>
              <span>
                <a
                  href="https://www.instagram.com/feasti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Instagram
                </a>
              </span>
            </ul>
          </div>
          <div className="col-sm-2 text-justify">
            <ul>
              <span className="text-white" style={{ fontWeight: "bold" }}>
                Join
              </span>
            </ul>
            <ul>
              <a
                href="/become-chef/register"
                className="text-white text-decoration-none"
              >
                Become a Feasti
              </a>
            </ul>
          </div>
          <div className="col-sm-3 text-center">
            <ul className="">
              <span className="text-white" style={{ fontWeight: "bold" }}>
                Download Links
              </span>
            </ul>
            <ul className="">
              <div className="text-center">
                <MobileStoreButton
                  store="ios"
                  height={60}
                  width={148}
                  url={iOSUrl}
                  linkProps={{ title: "Download Feasti" }}
                />
                <MobileStoreButton
                  store="android"
                  // height={60}
                  width={166}
                  url={androidUrl}
                  linkProps={{ title: "Download Feasti" }}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-dark row py-4 mx-0">
        <div className=" col-sm-4">
          <span className="footer-copyright text-white">
            © Feasti, Inc. 2020. All Rights Reserved.
          </span>
        </div>
        <div className="col-sm-2">
          <a href="/privacy-policy" className="text-white text-decoration-none">
            Privacy Policy
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href="/terms-of-service"
            className="text-white text-decoration-none"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
