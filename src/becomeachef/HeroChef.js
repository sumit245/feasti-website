import React from 'react';
import "../App.css"
const iOSChefUrl = "https://apps.apple.com/us/app/feasti-chef/id6443444359";
const iOSUrl = "https://apps.apple.com/us/app/feasti-homecooked-food/id1645705596"
const androidUrl = 'https://play.google.com/store/apps';

export default function HeroChef() {
  return (
    <div>
      <div className="slider-chef">
        <div className="slides">
          <div id='slides__1' className='slide'>
            <div>
              <h1 className="slide__text text-white" style={{ maxWidth: "80%" }}>
                Start Earning from Cooking
              </h1>
              <span className="text-white">Join Now</span><br />
              <div className="d-inline-flex align-items-start justify-content-center my-2">
                <div style={{ height: 32, width: 128, padding: 0 }}>
                  <a
                    href="https://apps.apple.com/us/app/feasti-homecooked-food/id1645705596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='app-store-link'
                  >
                  </a>
                </div>
                <div style={{ height: 32, width: 128, padding: 0, marginTop: -10 }}>
                  <a
                    href="https://play.google.com/store/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Coming Soon"
                    className='play-store-link'>
                  </a>
                </div>
              </div>
              <img
                src={require('../assets/user-home-final.png')}
                className="hero-img"
                height={360}
                width="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h6 className="gradient-text" style={{
          fontSize: 20
        }}>Earn money doing what you love</h6>
        <p
          className="text-justify"
        >
          Thanks to Feasti, you can now follow your passion to feed homemade
          food of your favourite cuisine and customise your menu. You can serve
          on the day whenever you are free to cook the specific meal.
          <br/>
          <i>
            "Payments from feasti is received regulary direct to my bank account
            so i never run out of my pocket. -Happy Feasti Chef"
          </i>
        </p>
      </div>
    </div>

  );
}
