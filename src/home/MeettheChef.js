import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
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

export default function MeettheChef() {
  const [restaurant, setRestaurant] = useState([]);
  const fetchRestaurant = async () => {
    const response = await fetch('https://feasti.com/api/newrest/', {
      method: 'GET',
    });
    const data = await response.json();
    let rest = shuffle(data);
    rest.length = 3;
    setRestaurant(rest);
  };

  useEffect(() => {
    let Mounted = true;
    fetchRestaurant();
    return () => {
      Mounted = false;
    };
  }, []);

  return (
    <section className="row mt-4 justify-content-center">
      <h4 className="text-center">Our Home Chefs are the best at cooking</h4>

      <div className="container">
        <div className="row mx-5 my-4">
          {restaurant.map((data, key) => (
            <div className="col-sm-4" key={key}>
              <div className="card">
                <div className="row">
                  <img
                    src={data.documents[1].banner_image}
                    style={{
                      width: '99%',
                      height: 180,
                      margin: '0.5%',
                      objectFit: 'cover',
                    }}
                    alt="Banner"
                  />
                </div>
                <div className="row align-items-start my-2 mx-1">
                  <div className="col-sm-2">
                    <img
                      className="border rounded-circle"
                      alt="profile"
                      src={data.documents[0].restaurant_image}
                      style={{ height: 40, width: 40 }}
                    />
                  </div>
                  <div className="col-sm-10">
                    <div className="row">
                      <div className="col-sm-10 text-wrapper">
                        <h6 className="my-0 py-0">
                          <b style={{fontSize:12,paddingBottom:2}} >{data.restaurant_name}</b>
                          </h6>
                        <p className="my-0 py-0 description">{data.about}</p>
                      </div>
                      <div className="col-sm-2">
                        <AiFillStar size={12} className="gradient-text" />
                        <strong
                          className="gradient-text pb-2"
                          style={{ fontSize: 10, fontWeight: 'bold' }}
                        >
                          5/5
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
