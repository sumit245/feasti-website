import React from "react";

export default function Featured() {
  return (
    <>
      <div className="row mt-4 seven">
        <h2
          className="text-black text-center my-4 mb-4"
          style={{ fontWeight: "bolder" }}
        >
          Featured Chefs
        </h2>
      </div>
      <div className="row mx-2 my-4">
        <div className="col-6">
          <div className="overlay-image-container my-4">
            <img
              className="overlay-image"
              src="https://cdn.t.shef.com/unsafe/700x0/center/middle/https://cdn.shef.com/static/media/bsd_top_d.b592f0e8.jpg"
              alt="Beef Dumplings"
              data-resized="true"
              object-position="center"
            />
            <div className="overlay">
              <h2 color="#FFFFFF" className="text">
                The Capital Grille Broil
              </h2>
              <h4
                color="#FFFFFF"
                className="text"
                style={{ fontSize: 20, marginLeft: 8 }}
              >
                <br />
                <br />
                by Bernard Arnault | Toronto
              </h4>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row my-4">
            <div className="overlay-image-container">
              <img
                className="overlay-image"
                src="https://cdn.t.shef.com/unsafe/600x0/center/middle/https://cdn.shef.com/static/media/bsd_mid_d.f7722f6f.jpg"
                alt="Chicken Pho"
                data-resized="true"
                object-position="center"
              />

              <div className="overlay">
                <h2 color="#FFFFFF" className="text">
                  Elephant & Castle
                </h2>
                <h4
                  color="#FFFFFF"
                  className="text"
                  style={{ fontSize: 20, marginLeft: 2 }}
                >
                  <br />
                  <br />
                  by Jim Walton | Toronto
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="overlay-image-container">
              <img
                className="overlay-image"
                src="https://cdn.t.shef.com/unsafe/0x400/center/middle/https://cdn.shef.com/static/media/bsd_bot_d.2313857d.jpg"
                alt="Shahi Paneer"
                data-resized="true"
                object-position="center"
              />
              <div className="overlay">
                <h2 color="#FFFFFF" className="text">
                  Le Pichet
                </h2>

                <h4
                  color="#FFFFFF"
                  className="text"
                  style={{ fontSize: 20, marginLeft: 2 }}
                >
                  <br />
                  <br />
                  by Larry Page
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
