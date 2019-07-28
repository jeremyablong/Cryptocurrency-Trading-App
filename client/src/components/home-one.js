import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Feature from './components/feature';
import ScreenShot from './components/screenshot';
import Team from './components/team';
import Blog from './components/blog';
import Price from './components/price';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import Subscribe from './components/subscribe';
import Footer from './components/footer';
import Tilt from 'react-tilt';
import "../scss/style.scss";
import "../scss/responsive.scss";

class HomeOne extends React.Component {
  render() {
  	document.body.classList.remove('landing-page');
	document.body.classList.remove('home-style');
  	document.body.classList.remove('three');
  	document.body.classList.remove('home-style-two');
  	return (
  		<div>
  			

  			{/* Home One Section End */}

			{/* About Component*/}
			<About />

			{/*Feature Component*/}
			<Feature />


			


			{/*Subscription Component*/}
			<Subscribe />

			{/*Footer Component*/}
			<Footer />
  		</div>
  	);
  }
}

export default HomeOne;