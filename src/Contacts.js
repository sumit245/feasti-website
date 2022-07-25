import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { FcFeedback, FcCallback } from 'react-icons/fc';

export default function Contacts() {
  return (
    <div className="fill">
      <Header />
      <div className="container">
        <div className="row my-5">
          <h1 className="mt-5">Welcome to Feasti support</h1>
          <h6 className="mb-5">How can we help you today?</h6>
        </div>
        <div className="row my-5">
          <div className="col-6">
            <div className="card">
              <div className="row">
                <div className="col-sm-4 mx-4 my-4">
                  <FcFeedback size={64} /> <h6>Contact us</h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-5 mx-4">
                  <input
                    className="form-control"
                    placeholder="Your Full Name*"
                  />
                </div>
                <div className="col-sm-5 ml-4">
                  <input
                    className="form-control"
                    placeholder="Email Address*"
                  />
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-10 mx-4 px-0">
                  <textarea
                    class="form-control bg-light"
                    rows="3"
                    placeholder="Type your message"
                    required
                    style={{ marginLeft: 10 }}
                  ></textarea>
                </div>
              </div>
              <div class="row mb-4 justify-content-end">
                <div className="col-sm-4">
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="row">
                <div className="col-sm-4 mx-4 my-4">
                  <FcCallback size={64} />
                  <h6>Get in touch</h6>
                </div>
              </div>
              <div className="row">
                <div className="col mx-4 my-5">
                  <h6 className="mt-2">
                    Want to get in touch? We'd love to hear from you
                  </h6>
                  <h6 className="mt-2">
                    Just pick up the call to chat with a member of the dedicated
                    team.
                  </h6>
                  <h6 className="mt-2 text-primary mb-0">
                    +16470028888
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
