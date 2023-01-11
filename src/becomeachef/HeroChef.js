import React from 'react';
import MobileStoreButton from 'react-mobile-store-button/lib/MobileStoreButton';
import Img1 from '../assets/chef_dashboard.png';
export default function HeroChef() {
  const iOSChefUrl =
    "https://apps.apple.com/us/app/feasti-chef/id6443444359";
  const iOSUrl = "https://apps.apple.com/us/app/feasti-homecooked-food/id1645705596"
  const androidUrl =
    'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
  return (
    <div className="row my-5">
      <div className="col-sm-9">
        <h1 className="gradient-text mx-5">Earn money doing what you love</h1>
        <p
          className=" mx-5 mb-5"
          style={{ letterSpacing: 1, lineHeight: 1.4, width: '80%' }}
        >
          Thanks to Feasti, you can now follow your passion to feed homemade
          food of your favourite cuisine and customise your menu. You can serve
          on the day whenever you are free to cook the specific meal.
          <i>
            "Payments from feasti is received regulary direct to my bank account
            so i never run out of my pocket. -Happy Feasti Chef"
          </i>
        </p>
        <div className="row my-4">
          <p className="text-center" style={{ marginLeft: -46 }}>
            GET THE APPLICATION NOW! AVAILABLE FOR BOTH <strong>ANDROID</strong>{' '}
            AND <strong>iOS</strong>
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6 ">
            <div className="row px-2 justify-content-center">
              <span
                className="gradient-text text-center my-4"
                style={{ fontSize: 18, fontWeight: 'bold', marginLeft: -20 }}
              >
                Customer App
              </span>
              <MobileStoreButton
                store="ios"
                height={60}
                width={166}
                url={iOSUrl}
                linkProps={{ title: 'Download Feasti' }}
              />
            </div>
            <div className="row justify-content-center">
              <MobileStoreButton
                height={80}
                width={190}
                store="android"
                url={androidUrl}
                linkProps={{ title: 'Download Feasti' }}
              />
            </div>
          </div>
          <div className="col-sm-6 border-left">
            <div className="row px-2">
              <span
                className="gradient-text text-justify my-4 mx-0"
                style={{ fontSize: 18, fontWeight: 'bold', marginLeft: -20 }}
              >
                Chef App
              </span>
              <MobileStoreButton
                store="ios"
                height={60}
                width={166}
                url={iOSChefUrl}
                linkProps={{ title: 'Download Feasti' }}
              />
            </div>
            <div className="row">
              <MobileStoreButton
                height={80}
                width={190}
                store="android"
                url={androidUrl}
                linkProps={{ title: 'Download Feasti' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <img
          src={Img1}
          style={{ height: 640, width: 'auto' }}
          alt="background"
        />
      </div>
    </div>
  );
}
