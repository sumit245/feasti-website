import React from "react";

export default function RegisterForm() {
  return (
    <form>
      <div className="row mt-4 mx-1">
        <div className="form-group col-md-6">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            placeholder="First Name"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="row mt-4 mx-1">
        <div className="form-group col-md-6">
          <label htmlFor="postal_code">Postal Code</label>
          <input
            type="text"
            className="form-control"
            id="postal_code"
            placeholder="Postal Code"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="row mt-4 mx-1">
        <div className="form-group col-md-12">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="row mt-4 mx-1">
        <div className="form-group col-md-12">
          <label htmlFor="restaurant_name">Restaurant Name</label>
          <input
            type="text"
            className="form-control"
            id="restaurant_name"
            placeholder="Restaurant Name"
          />
        </div>
      </div>

      <div className="form-row mx-3">
        <div className="form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree to the{"  "}
            <a href="/terms-of-service" className="text-info">
              Terms of Service
            </a>
            {"  "}
            and{"  "}
            <a href="privacy-policy" className="text-info">
              {" "}
              privacy policy
            </a>
          </label>
        </div>
      </div>

      <div className="text-center my-3">
        <button type="submit" className="btn btn-danger" style={{borderRadius:40}}>
          Submit
        </button>
      </div>
    </form>
  );
}
