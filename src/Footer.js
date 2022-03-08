import React from "react";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <footer className="page-footer font-small bg-dark pt-4">
      <div className="container-fluid text-md-left">
        <div className="row">
          <div className="col-sm-8">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <h4 className="text-white">Download the app</h4>
              </div>
              <div className="col-sm-8">
                <div className="row align-items-center">
                  <MobileStoreButton
                    store="ios"
                    width={148}
                    url={iOSUrl}
                    linkProps={{ title: "Download Feasti" }}
                  />
                  <MobileStoreButton
                    store="android"
                    width={148}
                    url={androidUrl}
                    linkProps={{ title: "Download Feasti" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 justify-content-center">
            <span className="mx-2">
              <a
                href="https://www.facebook.com/feasti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <FaFacebookF />
              </a>
            </span>
            <span className="mx-2">
              <a
                href="https://www.instagram.com/feasti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <FaInstagram />
              </a>
            </span>
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
        <div className="col-sm-2 text-justify">
          <a
            href="/become-chef/register"
            className="text-white text-decoration-none"
            style={{ fontWeight: "bold" }}
          >
            Join Feasti
          </a>
        </div>
      </div>
    </footer>
  );
}
