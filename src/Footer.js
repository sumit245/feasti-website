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
            <a href="/" className="App-logo">
              Feasti
            </a>
            <div>There's No Taste Like Home</div>
          </div>
          <div className="col-sm-3">
            <ul className="">
              <span className="text-white" style={{ fontWeight: "bold" }}>
                Follow
              </span>
            </ul>
            <ul className="">
              <span className="">
                <a
                  href="https://www.facebook.com/feasti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Facebook
                </a>
              </span>
            </ul>
            <ul className="">
              <span className="">
                <a
                  href="https://www.instagram.com/ordershef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Instagram
                </a>
              </span>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul className="">
              <span className="text-white" style={{ fontWeight: "bold" }}>
                Join
              </span>
            </ul>
            <ul className="">
              <span className="">
                <a href="/become-chef/register" className="text-white">
                  Become a Feasti
                </a>
              </span>
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
          <span className="text-white">
            © Feasti, Inc. 2020. All Rights Reserved.
          </span>
        </div>
        <div className="col-sm-2">
          <a href="/privacy-policy">
            <span className="text-white">Privacy Policy</span>
          </a>
        </div>
        <div className="col-sm-3">
          <span className="text-white">
            <a href="/terms-of-service">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
