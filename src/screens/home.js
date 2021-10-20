import React from 'react';
import './home.css';
import { Carousel, Button } from 'react-bootstrap';
import carImg from '../imgs/img.jpeg';
import eiffel from '../imgs/eiffel.jpg';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="car">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 item"
      src={eiffel}
      style= {{width:window.innerWidth},
            {height:window.innerHeight}}
      alt="First slide"
    />
    <Carousel.Caption className="car-text">
    <h1>Welcome to __incomplete__</h1>
    <h4>A word game inspired by hangman</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carImg}
      style= {{width:window.innerWidth},{height:window.innerHeight}}
      alt="Second slide"
    />

    <Carousel.Caption className="car-text">
    <h1>Keep Clicking</h1>
    <h3>Try to complete the words without before you run out of tries</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carImg}
      style= {{width:window.innerWidth},{height:window.innerHeight}}
      alt="Third slide"
    />

    <Carousel.Caption className="car-text">
    <h1>Try to get the highest score and get on the leaderboard</h1>
    <Button as={Link} to="/play" className="bg-transparent border-3">Play Now!</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default Home;