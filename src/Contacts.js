import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Contacts() {
  return (
    <div className="fill">
      <Header />
      <div className="container">
        <div className="row my-5">
          <h1 className="my-5">How I can contact Feasti Support?</h1>
        </div>
        <div className="row my-5">
          <div className="row">
            <div className="col-sm-4">Email Support:</div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <a href="mailto://" className="text-decoration-none">
                support@feasti.com
              </a>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="row">
            <div className="col-sm-4">Text Support:</div>
          </div>
          <div className="row">
            <div className="col-sm-4">+16470028888</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
