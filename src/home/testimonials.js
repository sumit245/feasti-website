import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="text-center">
    <p className="text-center">
      I have been ordering from Feasti for the past 6 months and it's been
      benefiting my health. The meals are hygienic and it was a great effort
      from the team to deliver proper homemade and hygienic meals during this
      pandemic situation, especially for people like me who do not know how to
      cook.
    </p>
    <h5>-Husen Limdiwala</h5>
  </div>,
  <div className="text-center">
    <p className="text-center">
      I have been ordering from Feasti for the past 6 months and it's been
      benefiting my health. The meals are hygienic and it was a great effort
      from the team to deliver proper homemade and hygienic meals during this
      pandemic situation, especially for people like me who do not know how to
      cook.
    </p>
    <h5>-Husen Limdiwala</h5>
  </div>,
  <div className="text-center">
    <p className="text-center">
      I have been ordering from Feasti for the past 6 months and it's been
      benefiting my health. The meals are hygienic and it was a great effort
      from the team to deliver proper homemade and hygienic meals during this
      pandemic situation, especially for people like me who do not know how to
      cook.
    </p>
    <h5>-Husen Limdiwala</h5>
  </div>,
];
export default function Testimonials() {
  return (
    <div className="row mx-1 my-4">
      <div className="seven">
        <h2
          className="text-black my-5 text-center"
          style={{ fontWeight: "bolder" }}
        >
          What our customers say
        </h2>
      </div>
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6 bg-light px-5 py-5">
            <AliceCarousel
              className="text-center"
              mouseTracking
              items={items}
              autoPlay
              disableDotsControls
            />
          </div>
          <div className="col-sm-3" />
        </div>
      </div>
    </div>
  );
}
