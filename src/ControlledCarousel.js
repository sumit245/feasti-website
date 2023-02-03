import React from 'react';
import './App.css';
import MobileStoreButton from 'react-mobile-store-button/lib/MobileStoreButton';

const iOSChefUrl = "https://apps.apple.com/us/app/feasti-chef/id6443444359";
const iOSUrl = "https://apps.apple.com/us/app/feasti-homecooked-food/id1645705596"
const androidUrl = 'https://play.google.com/store/apps';

export default function BannerCarousel() {
  return (
    <div className='hero-container'>
      <div className="row my-5">
        <div className="col-sm-12 mx-0 px-0">
          <h1 className="text-white mx-2">Subscription based homemade food</h1>
          <h3 className="mx-2">Subscription based <br />meal ordering platform.</h3>
          <p className="mx-2" >
            GET THE APP NOW!
          </p>
          <div className="d-flex justify-content-around">
            <div>
              <span
                className="gradient-text my-4 mx-2"
                style={{ fontSize: 18, fontWeight: 'bold' }}
              >
                Customer
              </span>
              <MobileStoreButton
                store="ios"
                url={iOSUrl}
                style={{ marginLeft: 10, height: 60, width: 160 }}
                linkProps={{ title: 'Coming Soon' }}
              />
              <MobileStoreButton
                height={80}
                width={180}
                style={{ height: 80, width: 180 }}
                store="android"
                url={androidUrl}
                linkProps={{ title: 'Coming Soon' }}
              />
            </div>
            <div className='border-left px-2'>
              <span
                className="gradient-text mx-2 my-4"
                style={{ fontSize: 18, fontWeight: 'bold' }}
              >
                Chef
              </span>
              <MobileStoreButton
                store="ios"
                style={{ marginLeft: 10, height: 60, width: 160 }}
                url={iOSChefUrl}
                linkProps={{ title: 'Coming Soon' }}
              />

              <MobileStoreButton
                height={80}
                width={190}
                style={{ height: 80, width: 180 }}
                store="android"
                url={androidUrl}
                linkProps={{ title: 'Coming Soon' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
