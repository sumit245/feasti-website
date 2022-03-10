import React from "react";
import { Slide } from "material-auto-rotating-carousel";
import { red, blue, green } from "@material-ui/core/colors";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const { withStyles } = require("@material-ui/core/styles");

const styles = {
  root: {
    backgroundColor: "#fff",
    height: 640,
    width: 1000,
  },
  media: {
    backgroundColor: "#fff",
    padding: 4,
    borderColor: red[400],
    borderWidth: 1,
    borderStyle: "solid",
  },
  title: {
    color: "#fff",
    backgroundColor: red[400],
    zIndex: 1000,
  },
  subtitle: {
    color: "#fff",
    backgroundColor: red[400],
    paddingBottom: 40,
    zIndex: 1000,
  },
  textMobileLandscape: {
    color: "#fff",
    backgroundColor: red[400],
    padding: 20,
    minWidth: 340,
    maxWidth: "calc(60% - 48px)",
    paddingBottom: 40,
    marginLeft: -100,
    marginTop: -20,
    zIndex: 1000,
  },
};
const StyledSlide = withStyles(styles)(Slide);
const items = [
  <StyledSlide
    mediaBackgroundStyle={{ backgroundColor: "#fff" }}
    media={
      <img
        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    }
    title="Why try Feasti ?"
    subtitle="Support Local Cooks"
    mobile
    landscape
  />,
  <StyledSlide
    media={
      <img
        src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80"
        alt=""
      />
    }
    title="Why try Feasti ?"
    subtitle="Affordable & Sustainable"
    mobile
    landscape
  />,
  <StyledSlide
    media={
      <img
        src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80"
        alt=""
      />
    }
    title="Why try Feasti ?"
    subtitle="Experience Authentic Food"
    mobile
    landscape
  />,
];
export default function MeettheChef() {
  return (
    <div>
      <div className="row mt-4 seven">
        <h2
          className="text-black text-center my-4 mb-4"
          style={{ fontWeight: "bolder" }}
        >
          Meet the chef
        </h2>
      </div>
      <div className="container" style={{ maxWidth: 1000 }}>
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          autoPlay
        />
      </div>
    </div>
  );
}
