import React from "react";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <footer className="bg-dark pt-4 mx-0">
      <div className="container-fluid justify-content-center">
        <div className="row align-items-center">
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
                    height={44}
                    url={iOSUrl}
                    linkProps={{ title: "Download Feasti" }}
                  />

                  <MobileStoreButton
                    store="android"
                    width={168}
                    height={64}
                    url={androidUrl}
                    linkProps={{ title: "Download Feasti" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <h5 className="mx-2">
              <a
                href="https://www.facebook.com/feasti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none mx-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/feasti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none mx-2"
              >
                <FaInstagram />
              </a>
            </h5>
          </div>
        </div>
      </div>

      <div className="row py-1 pb-2 mx-0">
        <div className=" col-sm-8">
          <span className="text-white-50 text-small">
            © Feasti, Inc. 2020. All Rights Reserved.
          </span>
        </div>
        <div className="col-sm-4">
          <a
            href="/privacy-policy"
            className="text-white-50 text-decoration-none mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-white-50 text-decoration-none mx-2"
          >
            Terms of Service
          </a>
          <a
            href="/become-chef/register"
            className="text-white-50 text-decoration-none mx-2"
          >
            Join Feasti
          </a>
        </div>
      </div>
    </footer>
  );
}
