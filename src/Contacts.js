import React from 'react';
import Footer from './Footer';
import HeaderTop from "./home/HeaderTop"
import Header from './Header';
import { FcFeedback, FcCallback } from 'react-icons/fc';

export default function Contacts() {
  return (
    <div>
      <HeaderTop />
      <Header />
      <div className="container">
        <h3 className="mt-2 fw-bold text-black">Welcome to Feasti support</h3>
        <h6 className="mb-5 fw-bold text-black">How can we help you today?</h6>
        <div className="row my-5">
          <div className="col-md-6 col-lg-6 col-sm-12 my-2">
            <div className="card">
              <div className="d-flex justify-content-center align-item-center py-2 px-2">
                <div>
                  <FcFeedback size={64} /> <h6>Contact us</h6>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-9 col-md-5 mx-2">
                  <input
                    className="form-control"
                    placeholder="Your Full Name*"
                  />
                </div>
                <div className="col-sm-9 col-md-5 mx-2 my-2">
                  <input
                    className="form-control"
                    placeholder="Email Address*"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-8 mx-2 px-0">
                  <textarea
                    class="form-control bg-light"
                    rows="3"
                    placeholder="Type your message"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="d-flex justify-content-center my-2">
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 my-2">
            <div className="card">
              <div className="d-flex justify-content-center">
                <div>
                  <FcCallback size={64} />
                  <h6>Get in touch</h6>
                </div>
              </div>
              <p className='text-justify mx-2'>
                <h6 className="mt-2 fw-bold text-black">
                  Want to get in touch? We'd love to hear from you.
                </h6>
                <h6 className="mt-2 fw-bold text-black">
                  Just pick up the call to chat with a member of the dedicated
                  team.
                </h6>
                <h6 className="mt-2 text-primary mb-0">
                  +16470028888
                </h6>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
