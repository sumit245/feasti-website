import React from "react";
import MobileStoreButton from "react-mobile-store-button/lib/MobileStoreButton";
import LinkedIn from "./assets/linked_in.png";
import Instagram from "./assets/Ig-logo.svg";
import Facebook from "./assets/fb-logo.svg";

export default function Footer() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <footer className="bg-grad">
      <div className="row align-items-center bg-dark py-4 mx-0">
        <div className="col-sm-10">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <h4
                className="text-white text-right"
                style={{ marginLeft: '10%' }}
              >
                Download the app
              </h4>
            </div>
            <div className="col-sm-4 pl-0">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <span
                    className="text-white text-center my-4"
                    style={{
                      fontSize: 18,
                    }}
                  >
                    Customer App
                  </span>
                  <MobileStoreButton
                    store="ios"
                    width={166}
                    height={60}
                    url={iOSUrl}
                    linkProps={{ title: 'Coming Soon' }}
                    style={{ marginLeft: 10, marginTop: 20 }}
                  />

                  <MobileStoreButton
                    store="android"
                    width={168}
                    height={52}
                    url={androidUrl}
                    linkProps={{ title: 'Coming Soon' }}
                  />
                </div>
                <div className="col-sm-6">
                  <span
                    className="text-white text-center my-4"
                    style={{
                      fontSize: 18,
                      // marginLeft: -20,
                    }}
                  >
                    Chef App
                  </span>
                  <MobileStoreButton
                    store="ios"
                    width={166}
                    height={60}
                    url={iOSUrl}
                    linkProps={{ title: 'Coming Soon' }}
                    style={{ marginLeft: 10, marginTop: 20 }}
                  />

                  <MobileStoreButton
                    store="android"
                    width={168}
                    height={52}
                    url={androidUrl}
                    linkProps={{ title: 'Coming Soon' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <h5 className="mx-2">
            <a
              href="https://www.facebook.com/feasti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-50 text-decoration-none mx-2"
            >
              <img src={Facebook} height={30} width={30} alt="instagram" />
            </a>
            <a
              href="https://www.instagram.com/feasti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-50 text-decoration-none mx-2"
            >
              <img src={Instagram} height={30} width={30} alt="instagram" />
            </a>
            <a
              href="https://www.instagram.com/feasti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-50 text-decoration-none mx-2"
            >
              <img src={LinkedIn} height={30} width={30} alt="instagram" />
            </a>
          </h5>
        </div>
      </div>

      <div className="row py-0 mx-0">
        <div className=" col-sm-8">
          <span className="text-white text-small" style={{ fontSize: 12 }}>
            © Feasti, Inc. 2022. All Rights Reserved.
          </span>
        </div>
        <div className="col-sm-4">
          <a
            href="/contacts"
            className="text-white text-decoration-none mx-2"
            style={{ fontSize: 12 }}
          >
            Contact us
          </a>
          <a
            href="/privacy-policy"
            className="text-white text-decoration-none mx-2"
            style={{ fontSize: 12 }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-white text-decoration-none mx-2"
            style={{ fontSize: 12 }}
          >
            Terms of Service
          </a>
          <a
            href="/become-chef/register"
            className="text-white text-decoration-none mx-2"
            style={{ fontSize: 12 }}
          >
            Join Feasti
          </a>
        </div>
      </div>
    </footer>
  );
}
