import React, { Component } from "react";
import Slider from "react-slick";
import "./landing.css";
import { Link } from "react-router-dom";


class HomeExercise extends Component {
constructor () {
  super();

  this.state = {
    name: "John Doe",
    email: "Johndoe23@gmail.com"
  }
}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      accessibility: true,
      arrows: true,
      autoplay: true,
      centerMode: true,
      className: "slick",
      autoplaySpeed: 3000,
      rows: 1
    };
    return (
   <div>
      <div>
        <Slider {...settings}>
          <div className="slide">
            <div className="jumbotron jumbo_one">
            <div className="container">
            <div className="overlay">
              <h1 className="display-4">Welcome to <span className="span_darkred">"The Fitness Channel"!</span></h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <hr className="my-4" />
              <p className="lead">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/tracking/diet" role="button">VISIT OUR DIET TRACKING APP</Link>
              </p>
              </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="jumbotron jumbo_three">
            <div className="container">
            <div className="overlay">
              <h1 className="display-4">Track your <span className="span_darkred">Weight loss</span> goals starting today!</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <hr className="my-4" />
              <p className="lead">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/contact" role="button">Let's build an app!</Link>
              </p>
              </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="jumbotron jumbo_two">
            <div className="container">
            <div className="overlay">
              <h1 className="display-4">We believe in <span className="span_darkred">you</span> and your fitness <span className="span_darkred">goals!</span></h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <hr className="my-4" />
              <p className="lead">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/contact" role="button">Let's build an app!</Link>
              </p>
              </div>
              </div>
            </div>
            
          </div>
{/*
          <div className="slide">
            <div className="jumbotron jumbo_one">
            <div className="container">
            <div className="overlay">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4" />
              <p className="lead">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
              </p>
              </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="jumbotron jumbo_two">
            <div className="container">
            <div className="overlay">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4" />
              <p className="lead">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
              </p>
              </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="jumbotron jumbo_three">
            <div className="container">
            <div className="overlay">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4" />
              <p className="lead">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
              </p>
              </div>
              </div>
            </div>
          </div>*/}
        </Slider>
       </div>


     </div>
    );
  }
}
export default HomeExercise;