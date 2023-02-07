import React, { useState, useEffect } from 'react';
import Img2 from '../assets/chef_dashboard.png';
import Img1 from '../assets/chef_login.png';
import Img3 from '../assets/chef_home.png';
import Img4 from '../assets/chef_promo.png';
import Img5 from '../assets/chef_dispatch.png';
import Img6 from '../assets/chef_review.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const data = [
  {
    title: "PERSONALIZE YOUR TASTEBUDS",
    description: "Select meal of your choice with meal type, rating, a wide variety of cuisines.",
    image: require("../assets/user-home-final.png")
  },
  {
    title: "EASY CHECKOUT",
    description: "Select plan, pickup or delivery slot, make your payment, and you’re all set.Get Discount on your favorite meal upto 20%.",
    image: require("../assets/checkout-user-final.png")
  },
  {
    title: "MANAGE SUBSCRIPTIONS EASILY",
    description: "Just view your subscription to add some extra meals or delivery notes before your orders gets delivered.",
    image: require("../assets/subscription-user-final.png")
  }
]

export default function ChefFeatured() {
  const [Img, setImage] = useState(Img1);
  const [highlighted, sethighlighted] = useState(1);
  const [index, setIndex] = useState(0)
  const [current, setCurrent] = useState({
    title: "",
    image: "",
    description: ""
  })
  const imageChanger = (selector) => {
    const select =
      selector === 1
        ? Img1
        : selector === 2
          ? Img2
          : selector === 3
            ? Img3
            : selector === 4
              ? Img4
              : selector === 5
                ? Img5
                : Img6;
    const highlight =
      selector === 1
        ? sethighlighted(selector)
        : selector === 2
          ? sethighlighted(selector)
          : selector === 3
            ? sethighlighted(selector)
            : selector === 4
              ? sethighlighted(selector)
              : selector === 5
                ? sethighlighted(selector)
                : sethighlighted(selector);
    setImage(select);
  };
  const incrementSlide = () => {
    if (index <= 3) {
      setIndex((index) => index + 1)
    } else {
      setIndex(0)
    }
  }

  const decrementSlide = () => {
    if (index >= 0) {
      setIndex(index - 1)
    } else {
      setIndex(0)
    }
  }
  useEffect(() => {
    setCurrent(data[index])
  }, [index])

  return (
    <div className="container justify-content-center">
      <h5 className="text-black fw-bold text-center">Features</h5>
      <div className="row justify-content-center my-4 lg-features">
        <div className="col-sm-4">
          <div className="row my-5 justify-content-end">
            <div
              className={`card round p-4 ${highlighted === 1 ? 'highlighted' : ''
                } card-hover`}
              style={{ width: '18rem', borderRadius: 20 }}
              onClick={() => imageChanger(1)}
            >
              <h6>
                <strong>GET STARTED</strong>
              </h6>
              <p>
                Login in a single step with just verifying your mobile number.
              </p>
            </div>
          </div>
          <div className="row my-5 justify-content-end">
            <div
              className={`card round p-4 ${highlighted === 2 ? 'highlighted' : ''
                } card-hover`}
              style={{ width: '18rem', borderRadius: 20 }}
              onClick={() => imageChanger(2)}
            >
              <h6>
                <strong>TRACK PERFORMANCE</strong>
              </h6>
              <p>
                No need of separate book keeping of records as we provide a
                well sieved dashboard to fit your requirements.
              </p>
            </div>
          </div>
          <div className="row my-5 justify-content-end">
            <div
              className={`card round p-4 ${highlighted === 3 ? 'highlighted' : ''
                } card-hover`}
              style={{ width: '18rem', borderRadius: 20 }}
              onClick={() => imageChanger(3)}
            >
              <h6>
                <strong>MENU MANAGEMENT</strong>
              </h6>
              <p>
                Keep record of all your meals so that you can prepare meal in
                exact amount.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <img
            src={Img}
            style={{ height: '640px', width: 'auto' }}
            alt="background"
            loading="lazy"
          />
        </div>
        <div className="col-sm-4">
          <div className="row my-5 justify-content-start">
            <div
              className={`card round p-4 ${highlighted === 4 ? 'highlighted' : ''
                } card-hover`}
              style={{ width: '18rem', borderRadius: 20 }}
              onClick={() => imageChanger(4)}
            >
              <h6>
                <strong>PROMOTE YOUR RESTAURANT</strong>
              </h6>
              <p>
                {' '}
                Keep record of your promotion and revenue generated to manage
                your promotions.
              </p>
            </div>
          </div>
          <div className="row my-5 justify-content-start">
            <div
              className={`card round p-4 ${highlighted === 5 ? 'highlighted' : ''
                } card-hover`}
              style={{ width: '18rem', borderRadius: 20 }}
              onClick={() => imageChanger(5)}
            >
              <h6>
                <strong>EASY DISPATCH</strong>
              </h6>
              <p>
                Get location, add-ons and contact of the customer so no meal
                get mistaken.
              </p>
            </div>
          </div>
          <div className="row my-5 justify-content-start">
            <div
              className={`card round p-4 ${highlighted === 6 ? 'highlighted' : ''
                } card-hover`}
              style={{ width: '18rem', borderRadius: 20 }}
              onClick={() => imageChanger(6)}
            >
              <h6>
                <strong>MANAGE YOUR REVIEWS</strong>
              </h6>
              <p>
                Customers are supreme for us so we dont let any customers go
                unsatisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-4 sm-features'>
        <div className='d-flex justify-content-end'>
          <button type="button" onClick={decrementSlide} className='btn btn-round mr-1'>
            <FaChevronLeft size={16} color="#FFF" />
          </button>
          <button type="button" onClick={incrementSlide} className='btn btn-round ml-1'>
            <FaChevronRight size={16} color="#fff" />
          </button>
        </div>
        <div className='text-center'>
          <h6>
            <strong>{current.title}</strong>
          </h6>
          <img src={current.image} style={{ width: "auto", height: "340px" }} />
          <p className='text-center'>
            {current.description}
          </p>
        </div>

      </div>
    </div>
  );
}
