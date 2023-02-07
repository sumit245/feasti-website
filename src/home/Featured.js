import React, { useState, useEffect } from 'react';
import Img2 from '../assets/home_screen_user.png';
import Img1 from '../assets/login_screen_user.png';
import Img3 from '../assets/result_details.png';
import Img4 from '../assets/checkout.png';
import Img5 from '../assets/my_orders.png';
import Img6 from '../assets/subscription_user.png';
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

export default function Featured() {
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
      <h4 className="text-black fw-bold text-center">Features</h4>
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
                Login in a single step with just verifying your mobile number
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
                <strong>PERSONALIZE YOUR TASTEBUDS</strong>
              </h6>
              <p>
                Select meal of your choice with meal type, rating, a wide
                variety of cuisines.
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
                <strong>CHEFS MENU & PLAN</strong>
              </h6>
              <p>
                Placing your order is a piece of cake! Select plan of your
                choice based on your future plans.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <img
            src={Img}
            style={{ height: '640px', width: 'auto' }}
            alt="background"
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
                <strong>EASY CHECKOUT</strong>
              </h6>
              <p>
                {' '}
                Select plan, pickup or delivery slot, make your payment, and
                you’re all set. Get Discount on your favorite meal upto 20%.
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
                <strong>VIEW ORDERS</strong>
              </h6>
              <p>
                Manage your orders for future reference and you can directly
                reorder from your past meal.
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
                <strong>ADD EXTRA MEALS TO SUBSCRIPTION</strong>
              </h6>
              <p>
                Just view your subscription to add some extra meals or
                delivery notes before your orders gets delivered.
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
