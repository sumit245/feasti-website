import React from 'react';
import {
  GiBowlOfRice,
  GiTakeMyMoney,
  GiOpenedFoodCan,
  GiEarthAmerica,
  GiShakingHands,
} from 'react-icons/gi';

import {MdDeliveryDining} from "react-icons/md"

export default function Values() {
  return (
    <section className="my-4 py-5">
      <div className="container">
        <p className="text-center">Feasti is specially designed for</p>
        <h3
          className="text-center"
          style={{ textTransform: 'uppercase', fontSize: 20,fontWeight:'bold' }}
        >
          your home cooked foods made by local chefs
        </h3>
        <div className="row my-5">
          <div className="col-lg-4 mt-5">
            <div className="row my-4">
              <div className="col-lg-4 text-center">
                <GiBowlOfRice size={64} className="gradient-text" />
              </div>
              <div className="col-lg-8 text-center">
                <p>
                  Enjoy community through food in three steps.
                  <br />
                  <strong>Explore, Subscribe, Enjoy</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="row my-4">
              <div className="col-lg-4 text-center">
                <GiTakeMyMoney size={64} className="gradient-text" />
              </div>
              <div className="col-lg-8 text-center">
                <p>
                  Get Food with extra servings that too{' '}
                  <strong>without emptying your wallet</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="row my-4">
              <div className="col-lg-4 text-center">
                <MdDeliveryDining size={64} className="gradient-text" />
              </div>
              <div className="col-lg-8 text-center">
                <p>
                  In a hurry to office? Reaching home late? Our chef will cook
                  and <strong>deliver at your place.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-4 mt-5">
            <div className="row my-4">
              <div className="col-lg-4 text-center">
                <GiShakingHands size={64} className="gradient-text" />
              </div>
              <div className="col-lg-8 text-center">
                <p>
                  Connect through cooking with <strong>local chefs</strong> in
                  your community.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="row my-4">
              <div className="col-lg-4 text-center">
                <GiOpenedFoodCan size={64} className="gradient-text" />
              </div>
              <div className="col-lg-8 text-center">
                <p>
                  <strong>Unlock new flavour </strong>
                  with your favourite taste from local chef in suitable time
                  slot.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="row my-4">
              <div className="col-lg-4 text-center">
                <GiEarthAmerica size={64} className="gradient-text" />
              </div>
              <div className="col-lg-8 text-center">
                <p>
                  <strong>Explore authentic cuisines </strong>
                  from all over world without rushing into market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
