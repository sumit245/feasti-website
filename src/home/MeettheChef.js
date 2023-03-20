import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "axios"
import axios from 'axios';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export default function MeettheChef() {
  const [restaurant, setRestaurant] = useState([]);
  const [index,setIndex]=useState(0)
  const [loaded, setLoaded] = useState(false)
  const [activeRestaurant, setActiveRestaurant] = useState({
    documents: [
      { name: "", profile_image: "" },
      { name: "", banner_image: "" },
    ],
    about:"",
  })

  const fetchRestaurant = async () => {
    setLoaded(true)
    const response = await axios.get('api/newrest',{
      headers: { "Access-Control-Allow-Origin": "*" }
    });
    const data = response.data;
    let rest = shuffle(data);
    rest.length = 3;
    setRestaurant(rest);
    setActiveRestaurant(rest[index])
    setLoaded(false)
  };

  const incrementSlide = () => {
    if (index <= 4) {
      setIndex((index) => index + 1)
      setActiveRestaurant(restaurant[index])
      
    } else {
      setIndex(0)
      setActiveRestaurant(restaurant[0])
    }
  }

  const decrementSlide = () => {
    if (index >= 0) {
      setIndex((index) => index - 1)
      setActiveRestaurant(restaurant[index])
    } else {
      setIndex(0)
      setActiveRestaurant(restaurant[0])
    }
  }

  useEffect(() => {
    fetchRestaurant();
  }, [loaded]);

  return (
    <div className="container">
      <h4 className="text-black fw-bold text-center">Our Homechefs are the best at cooking</h4>
      <div className="d-flex justify-content-end">
        <button type="button" onClick={decrementSlide} className='btn btn-round mr-1'>
          <FaChevronLeft size={16} color="#FFF" />
        </button>
        <button type="button" onClick={incrementSlide} className='btn btn-round ml-1'>
          <FaChevronRight size={16} color="#fff" />
        </button>
      </div>
      <div className="row my-4">
        <div className="col-12 my-2">
          <div className="card">
            <img
              src={activeRestaurant.documents[1].banner_image}
              style={{
                height: 180,
                objectFit: 'cover',
              }}
              className="card-img-top"
              alt="Banner"
              loading="lazy"
            />
            <div className="row align-items-start my-2 mx-1">
              <div className="col-2">
                <img
                  className="border rounded-circle"
                  alt="profile"
                  src={activeRestaurant.documents[0].restaurant_image}
                  style={{ height: 40, width: 40 }}
                  loading="lazy"
                />
              </div>
              <div className="col-10">
                <div className='d-flex justify-content-between'>
                  <h6 className="card-title">
                    <b style={{ fontSize: 12, paddingBottom: 1 }}>
                      {activeRestaurant.restaurant_name}
                    </b>
                  </h6>
                  <strong
                    className="gradient-text pb-2"
                    style={{ fontSize: 10, fontWeight: 'bold' }}
                  >
                    <AiFillStar size={12} />
                    5/5
                  </strong>
                </div>

                <div className="text-wrapper">
                  <p className="my-0 py-0 description">{activeRestaurant.about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
