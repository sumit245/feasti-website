import React from 'react';
import Img1 from './assets/home_screen_user.png';
import './App.css';
import MobileStoreButton from 'react-mobile-store-button/lib/MobileStoreButton';

export default function BannerCarousel() {
  const iOSChefUrl =
    "https://apps.apple.com/us/app/feasti-chef/id6443444359";
  const iOSUrl = "https://apps.apple.com/us/app/feasti-homecooked-food/id1645705596"
  const androidUrl = 'https://play.google.com/store/apps';
  return (
    <div className="row my-5">
      <div className="col-sm-9">
        <h1 className="gradient-text mx-5">Homemade Food</h1>
        <h4 className="mx-5">Subscription based meal ordering platform.</h4>
        <p
          className="mx-5 my-5"
          style={{ letterSpacing: 1, lineHeight: 1.4, width: '80%' }}
        >
          Feasti is a whole new way to order subscription based meals that is
          delivered straight to your door. Discover local home-based cooks in
          your community, browse their unique menus, and let them handle the
          cooking for you! Download the app today and discover a whole new way
          to eat. "OMG... It's like the Uber of yummy homemade food!" - Hungry
          Customer
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
                disabled={true}
                linkProps={{ title: 'Coming Soon' }}
              />
            </div>
            <div className="row justify-content-center">
              <MobileStoreButton
                height={80}
                width={190}
                store="android"
                url={androidUrl}
                linkProps={{ title: 'Coming Soon' }}
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
                linkProps={{ title: 'Coming Soon' }}
              />
            </div>
            <div className="row">
              <MobileStoreButton
                height={80}
                width={190}
                store="android"
                url={androidUrl}
                linkProps={{ title: 'Coming Soon' }}
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
          loading="lazy"
        />
      </div>
    </div>
  );
}
