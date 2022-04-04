import React from "react";
import { Slide } from "material-auto-rotating-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "#fff",
    height: 640,
    width: 1000,
  },
  media: {
    backgroundColor: "#fff",
    padding: 4,
    borderColor: "#ff6600",
    borderWidth: 1,
    borderStyle: "solid",
    height: 640,
    width: 800,
  },
  title: {
    color: "#fff",
    backgroundColor: "transparent",
    zIndex: 1000,
    fontSize: 22,
  },
  subtitle: {
    color: "#fff",
    backgroundColor: "transparent",
    paddingBottom: 40,
    zIndex: 1000,
  },
  textMobileLandscape: {
    padding: 20,
    width: 496,
    paddingBottom: 40,
    marginLeft: -48,
    marginTop: -20,
    zIndex: 1000,
    background: "linear-gradient(135deg, #FF9900 30%, #FF6600 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
};
const StyledSlide = withStyles(styles)(Slide);
const items = [
  <StyledSlide
    mediaBackgroundStyle={{ backgroundColor: "#fff" }}
    media={
      <img
        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=787&q=80"
        alt=""
        style={{ height: 640, width: 640 }}
      />
    }
    subtitle={[
      <strong>Fresh & Made-to-Order</strong>,
      <br />,
      <br />,
      "Our HomeCooks purchase ingredients locally and prepare dishes to suit your dietary preferences. ",
    ]}
    mobile
    landscape
  >
    <p className="lead">
      Our HomeCooks purchase ingredients locally and prepare dishes to suit your
      dietary preferences.
    </p>
  </StyledSlide>,
  <StyledSlide
    media={
      <img
        src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80"
        alt=""
        style={{ height: 640, width: 640 }}
      />
    }
    subtitle={[
      <strong>Support Local Cooks</strong>,
      <br />,
      <br />,
      "Help empower local talented folks in your community with the opportunity to share their delicious culinary creations",
    ]}
    mobile
    landscape
  />,
  <StyledSlide
    media={
      <img
        src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80"
        alt=""
        style={{ height: 640, width: 640 }}
      />
    }
    subtitle={[
      <strong>Experience Authentic Food</strong>,
      <br />,
      <br />,
      "Enjoy a worldly culinary experience without even having to step outside of your neighborhood.",
    ]}
    mobile
    landscape
  />,
];
export default function MeettheChef() {
  return (
    <div>
      <div className="row mt-4 my-4 justify-content-center">
        <div className="header-container">
        <h2
          className="text-black"
          style={{ fontWeight: "bolder" }}
        >
          Why try feasti?
        </h2>
        </div>
      </div>
      <div className="container">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          // autoPlay
        />
      </div>
    </div>
  );
}
