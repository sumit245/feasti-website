import React from 'react';
import './App.css';
import MobileStoreButton from 'react-mobile-store-button/lib/MobileStoreButton';

const iOSChefUrl = "https://apps.apple.com/us/app/feasti-chef/id6443444359";
const iOSUrl = "https://apps.apple.com/us/app/feasti-homecooked-food/id1645705596"
const androidUrl = 'https://play.google.com/store/apps';

export default function BannerCarousel() {
  return (
    <div className='hero-container'>
      <div className="slider">
        <div className="slides">
          <div id='slides__1' className='slide'>
            <div>
              <h1 className="slides__text">Subscription based homemade<br /> meal plan</h1>
              <span className="slides__text">Order your meal from our app</span>
              <div className="d-inline-flex align-items-start justify-content-center">
                <div style={{ height: 40, width: 160, padding: 0 }}>
                  <a
                    href="https://apps.apple.com/us/app/feasti-homecooked-food/id1645705596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='app-store-link'
                  >
                  </a>
                </div>
                <div style={{ height: 40, width: 160, padding: 0, marginTop: -10 }}>
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
                src={require('./assets/home_screen_user.png')}
                className="hero-img"
                height={600}
                width={240}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
