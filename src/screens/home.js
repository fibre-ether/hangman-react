import React from 'react';
import './home.css';
import { Carousel, Button } from 'react-bootstrap';
import carImg from '../imgs/gradient.jpg';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="car">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 item"
      src={carImg}
      // eslint-disable-next-line no-sequences
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
      // eslint-disable-next-line no-sequences
      style= {{width:window.innerWidth},{height:window.innerHeight}}
      alt="Second slide"
    />

    <Carousel.Caption className="car-text">
    <h1>Keep Clicking</h1>
    <h4>Click the letters on screen to complete the word before you run out of tries</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carImg}
      // eslint-disable-next-line no-sequences
      style= {{width:window.innerWidth},{height:window.innerHeight}}
      alt="Third slide"
    />

    <Carousel.Caption className="car-text">
    <h1>Reveal the description and sentence to get an advantage</h1>
    <Button as={Link} to="/play" className="bg-transparent border-3"><h4>Play Now!</h4></Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default Home;