import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Quotation from "../assets/quotation.svg";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";

const items = [
  <div className="row">
    <div className="col-sm-6 px-5 py-5">
      <div className="left mx-2 text-justify" style={{ maxWidth: "90%" }} >
        <p className="left">
          <img src={Quotation} alt="text" height={20} width={20} />
          &nbsp;&nbsp; I have been ordering from Feasti for the past 6 months
          and it's been benefiting my health. The meals are hygienic and it was
          a great effort from the team to deliver proper homemade and hygienic
          meals during this pandemic situation, especially for people like me
          who do not know how to cook.
        </p>
        <h5>-Corring M</h5>
      </div>
    </div>
    <div className="col-sm-6 px-5 py-5">
      <div className="left mx-2 text-justify" style={{ maxWidth: "90%" }} >
        <p className="left">
          <img src={Quotation} alt="text" height={20} width={20} />
          &nbsp;&nbsp; I have been ordering from Feasti for the past 6 months
          and it's been benefiting my health. The meals are hygienic and it was
          a great effort from the team to deliver proper homemade and hygienic
          meals during this pandemic situation, especially for people like me
          who do not know how to cook.
        </p>
        <h5>-Husen Limdiwala</h5>
      </div>
    </div>
  </div>,
  <div className="row">
    <div className="col-sm-6 px-5 py-5">
      <div className="left mx-2 text-justify" style={{ maxWidth: "90%" }} >
        <p className="left">
          <img src={Quotation} alt="text" height={20} width={20} />
          &nbsp;&nbsp; I have been ordering from Feasti for the past 6 months
          and it's been benefiting my health. The meals are hygienic and it was
          a great effort from the team to deliver proper homemade and hygienic
          meals during this pandemic situation, especially for people like me
          who do not know how to cook.
        </p>
        <h5>-Corring M</h5>
      </div>
    </div>
    <div className="col-sm-6 px-5 py-5">
      <div className="left mx-2 text-justify" style={{ maxWidth: "90%" }} >
        <p className="left">
          <img src={Quotation} alt="text" height={20} width={20} />
          &nbsp;&nbsp; I have been ordering from Feasti for the past 6 months
          and it's been benefiting my health. The meals are hygienic and it was
          a great effort from the team to deliver proper homemade and hygienic
          meals during this pandemic situation, especially for people like me
          who do not know how to cook.
        </p>
        <h5>-Husen Limdiwala</h5>
      </div>
    </div>
  </div>,
];
const renderNextButton = ({ isDisabled }) => {
  return (

    <ArrowForwardIos className="arrow-container" style={{ right: 20, top: "40%", borderRadius: 25, color: "#fff", position: "absolute" }} />

  )
}

const renderPrevButton = ({ isDisabled }) => {
  return (
    <ArrowBackIos className="arrow-container" style={{ left: 20, top: "40%", borderRadius: 25, color: "#fff", position: "absolute" }} />
  )
};
export default function Testimonials() {
  return (
    <div className="row mx-1 my-4">
      <div className="row mt-4 my-4 justify-content-center">
        <div className="header-container">
          <h2
            className="text-black"
            style={{ fontWeight: "bolder" }}
          >
            What our customers say
          </h2>
        </div>
      </div>
      <div className="container justify-content-center">
        <div className="row">
          <AliceCarousel
            responsive
            controlsStrategy="responsive"
            autoPlay={true}
            autoPlayInterval={10000}
            infinite={true}
            keyboardNavigation={true}
            className="text-center"
            mouseTracking
            items={items}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            disableDotsControls
          // disableButtonsControls
          />
        </div>
      </div>
    </div>
  );
}
