import React from 'react';
import './App.css';

export default function BannerCarousel() {
  return (
    <div className="slider">
      <div className="slides">
        <div id='slides__1' className='slide'>
          <div>
            <h1 className="slide__text text-white" style={{ maxWidth: "80%" }}>Subscription based homemade meal plan</h1>
            <span className="text-white">Order your meal from our app</span>
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
              src={require('./assets/user-home-final.png')}
              className="hero-img"
              height={360}
              width="auto"
              alt="User-home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
