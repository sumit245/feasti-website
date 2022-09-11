import React, { useState, useEffect } from 'react';
import Quotation from './assets/quotation.svg';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export default function ChefReview() {
  const [restaurant, setRestaurant] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const fetchRestaurant = async () => {
    const response = await fetch('https://feasti.com/api/newrest/', {
      method: 'GET',
    });
    const data = await response.json();
    let rest = shuffle(data);
    rest.length = 2;
    setRestaurant(rest);
    setLoaded(true);
  };

  useEffect(() => {
    let Mounted = true;
    fetchRestaurant();
    return () => {
      Mounted = false;
    };
  }, []);

  if (loaded) {
    return (
      <div className="container my-4">
        <div className="row mx-4 my-4">
          <div className="bordered-benefits mx-5">
            <div className="row">
              <div className="text-justify p-4">
                <h6>
                  <strong>Most Flexible Plans</strong>
                </h6>
                <ul>
                  <li>
                    <span className="text-black">
                      Create your own menu, update and change prices whenever
                      you want.
                    </span>
                  </li>
                  <li>
                    <span className="text-black">
                      Pick your slot, set your own schedule and deliver.
                    </span>
                  </li>
                  <li>
                    <span className="text-black">
                      Promote your restaurant by participating in campaign or
                      attract more foodies by offering a coupon
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bordered-benefits mx-5">
            <div className="row">
              <div className="text-justify p-4">
                <h6>
                  <strong>Build a successful business</strong>
                </h6>
                <ul>
                  <li>
                    <span className="text-black">
                      Get paid for what you sell.
                    </span>
                  </li>
                  <li>
                    <span className="text-black">
                      Attract more customers with highly customizable campaign.
                    </span>
                  </li>
                  <li>
                    <span className="text-black">
                      No worry for customer support and payments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-4 my-4">
          {restaurant.map((data, key) => (
            <div className="bordered-img mx-5" key={key}>
              <img
                src={data.documents[0].restaurant_image}
                style={{
                  objectFit: 'cover',
                  borderRadius: 20,
                  height: 360,
                  width: 300,
                  marginLeft: '12%',
                }}
                loading="lazy"
                alt="chef-1"
              />
            </div>
          ))}
        </div>
        <div className="row mx-4 my-4">
          <div className="bordered-review mx-5">
            <div className="row">
              <div className="text-justify p-4">
                <img
                  src={Quotation}
                  alt="chef-1"
                  loading="lazy"
                  style={{ height: 20, width: 20 }}
                />
                &nbsp;&nbsp; {restaurant[0].city}, {restaurant[0].state} |
                Joined in 2022
                <p
                  className="lead"
                  style={{ fontStyle: 'italic', fontSize: 14 }}
                >
                  For me, Feasti has been the perfect platform to exhibit my
                  skills, talents and interests in cooking. My partnership with
                  Feasti has been comfortable, convenient and long mainly
                  because of their efficient, organised working system. Over the
                  years, Feasti has served as a platform for me to do a business
                  of my own and make an earning. I’m not only happy but also
                  proud to be associated with Feasti as a chef.
                </p>
                <strong className="text-black">
                  Chef {restaurant[0].owner_name}
                </strong>
              </div>
            </div>
          </div>

          <div className="bordered-review mx-5">
            <div className="row">
              <div className="text-justify p-4">
                <img
                  src={Quotation}
                  alt="chef-1"
                  loading="lazy"
                  style={{ height: 20, width: 20 }}
                />
                &nbsp;&nbsp; {restaurant[1].city}, {restaurant[1].state} |
                Joined in 2022
                <p
                  className="lead"
                  style={{ fontStyle: 'italic', fontSize: 14 }}
                >
                  I have always been passionate about cooking, it gives me a
                  certain joy when I’m cooking for people. Joining Feasti as a
                  chef gave me the opportunity to prepare a variety of dishes in
                  my very own kitchen and share it with people who love homemade
                  food as much as me! Over the short time that I have been a
                  Feasti chef partner, they have become an extension of my
                  kitchen, constantly communicating with me and giving feedback.
                </p>
                <strong className="text-black">
                  Chef {restaurant[1].owner_name}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
