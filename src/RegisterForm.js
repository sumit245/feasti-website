import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import { CircleLoader } from "react-spinners";
const override = css`
  position: "absolute";
  left: 40%;
  top: -250px;
  z-index: 10;
`;
export default function RegisterForm() {
  let [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    postal_code: "",
    restaurant_name: "",
  });

  const onChangeText = (event) => {
    const { name, value } = event.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = async () => {
    setLoading(true);
    await axios.post("/api/partnerrequest/", state);
    setLoading(false);
    alert("Request submitted succesfully");
  };

  return (
    <form>
      <div className="row mt-4 mx-1">
        <div className="form-group col-md-6">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            onChange={(e) => onChangeText(e)}
            placeholder="First Name"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            onChange={(e) => onChangeText(e)}
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
            name="postal_code"
            onChange={(e) => onChangeText(e)}
            placeholder="Postal Code"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            onChange={(e) => onChangeText(e)}
            name="phone"
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
            name="email"
            onChange={(e) => onChangeText(e)}
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
            name="restaurant_name"
            onChange={(e) => onChangeText(e)}
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
            value={checked}
            onChange={() => setChecked(!checked)}
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
        <button
          type="button"
          disabled={!checked}
          onClick={onSubmit}
          className="btn btn-danger"
          style={{ borderRadius: 40 }}
        >
          Get Started
        </button>
      </div>
      {loading && (
        <CircleLoader
          color="#feaa1a"
          css={override}
          loading={loading}
          size={50}
        />
      )}
    </form>
  );
}
