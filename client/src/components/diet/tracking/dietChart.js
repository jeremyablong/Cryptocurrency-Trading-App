import React, { Component } from 'react';
import Chart from 'chart.js';
import "./track.css";

class DietChart extends Component {
constructor () {
	super();

	this.state = {
		sunday: 0,
		monday: 0,
		tuesday: 0,
		wednesday: 0,
		thursday: 0,
		friday: 0,
		saturday: 0,
		sunClicked: false,
		monClicked: false,
		tuesClicked: false,
		wedClicked: false,
		thurClicked: false,
		friClicked: false,
		satClicked: false,
		activity: "Please list the activity name and/or type...",
		caloriesBurned: 0,
		description: "Please list what you did for this day, be as detailed or broad as you like..."
	}
}
	componentDidMount () {

		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
	}
	handleSubmitSunday = (e) => {
		
		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
		e.preventDefault();
		this.setState({
			sunday: this.state.caloriesBurned
		}, () => {
			console.log(this.state.sunday)
		})
		console.log("Clicked");
	};
	handleSubmitMonday = (e) => {
		
		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
		e.preventDefault();
		this.setState({
			monday: this.state.caloriesBurned
		}, () => {
			console.log(this.state.sunday)
		})
		console.log("Clicked");
	};
	handleSubmitTuesday = (e) => {
		
		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
		e.preventDefault();
		this.setState({
			tuesday: this.state.caloriesBurned
		}, () => {
			console.log(this.state.tuesday)
		})
		console.log("Clicked");
	};
	handleSubmitWednesday = (e) => {
		
		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
		e.preventDefault();
		this.setState({
			wednesday: this.state.caloriesBurned
		}, () => {
			console.log(this.state.wednesday)
		})
		console.log("Clicked");
	};
	handleSubmitThursday = (e) => {
		
		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
		e.preventDefault();
		this.setState({
			thursday: this.state.caloriesBurned
		}, () => {
			console.log(this.state.thursday)
		})
		console.log("Clicked");
	};
	handleSubmitFriday = (e) => {
		
		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
		e.preventDefault();
		this.setState({
			friday: this.state.caloriesBurned
		}, () => {
			console.log(this.state.friday)
		})
		console.log("Clicked");
	};
	handleSubmitSaturday = (e) => {
		
		const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.state;

		let ctx = document.getElementById('myChart').getContext('2d');
		let myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'],
		        datasets: [{
		            label: 'Calories burned in last 7 days',
		            data: [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        responsive: true,
		        maintainAspectRatio: false
		    }
		});
		e.preventDefault();
		this.setState({
			saturday: this.state.caloriesBurned
		}, () => {
			console.log(this.state.saturday)
		})
		console.log("Clicked");
	};
	renderSunday = () => {
		return (
		    <div className="col-md-9">
				<div className="form_main">
		                <h4 className="heading"><strong>Register calories for </strong> SUNDAY <span></span></h4>
		                <div className="form">
		                <form onSubmit={this.handleSubmitSunday} id="contactFrm" name="contactFrm">
		                   <input onChange={(e) => {
		                    	this.setState({
									activity: e.target.value
		                    	})
		                    }} type="text" required="" placeholder={this.state.activity} name="name" className="txt"/>
		                    <div className="input-group mb-3">
							  <div className="input-group-prepend">
							    <label className="input-group-text" htmlFor="inputGroupSelect01">Calories burned</label>
							  </div>
							  <select onChange={(e) => {
							  	this.setState({
							  		caloriesBurned: e.target.value
							  	})
							  }} className="custom-select" id="inputGroupSelect01">
							    <option defaultValue>Choose...</option>
							    <option value="100">100</option>
							    <option value="200">200</option>
							    <option value="300">300</option>
							    <option value="400">400</option>
							    <option value="500">500</option>
							    <option value="600">600</option>
							    <option value="700">700</option>
							    <option value="800">800</option>
							    <option value="900">900</option>
							    <option value="1000">1000</option>
							    <option value="1100">1100</option>
							    <option value="1200">1200</option>
							    <option value="1300">1300</option>
							    <option value="1400">1400</option>
							    <option value="1500">1500</option>
							    <option value="1600">1600</option>
							    <option value="1700">1700</option>
							    <option value="1800">1800</option>
							    <option value="1900">1900</option>
							    <option value="2000">2000</option>
							    <option value="2500">2500</option>
							    <option value="3000">3000</option>
							    <option value="3500">3500</option>
							    <option value="4000">4000</option>
							  </select>
							</div>
		                	 <textarea onChange={(e) => {
		                    	this.setState({
									description: e.target.value
		                    	})
		                    }} placeholder={this.state.description} name="description" type="text" className="txt_3"></textarea>
		                     <input type="submit" value="submit" name="submit" className="txt2"/>
		                </form>
		            </div>
		            </div>
		        </div>
		);
	};
	renderMonday = () => {
		return (
		    <div className="col-md-9">
				<div className="form_main">
		                <h4 className="heading"><strong>Register calories for </strong> MONDAY <span></span></h4>
		                <div className="form">
		                <form onSubmit={this.handleSubmitMonday} id="contactFrm" name="contactFrm">
		                    <input onChange={(e) => {
		                    	this.setState({
									activity: e.target.value
		                    	})
		                    }} type="text" required="" placeholder={this.state.activity} name="name" className="txt"/>
		                   	<div className="input-group mb-3">
							  <div className="input-group-prepend">
							    <label className="input-group-text" htmlFor="inputGroupSelect01">Calories burned</label>
							  </div>
							  <select onChange={(e) => {
							  	this.setState({
							  		caloriesBurned: e.target.value
							  	})
							  }} className="custom-select" id="inputGroupSelect01">
							    <option defaultValue>Choose...</option>
							    <option value="100">100</option>
							    <option value="200">200</option>
							    <option value="300">300</option>
							    <option value="400">400</option>
							    <option value="500">500</option>
							    <option value="600">600</option>
							    <option value="700">700</option>
							    <option value="800">800</option>
							    <option value="900">900</option>
							    <option value="1000">1000</option>
							    <option value="1100">1100</option>
							    <option value="1200">1200</option>
							    <option value="1300">1300</option>
							    <option value="1400">1400</option>
							    <option value="1500">1500</option>
							    <option value="1600">1600</option>
							    <option value="1700">1700</option>
							    <option value="1800">1800</option>
							    <option value="1900">1900</option>
							    <option value="2000">2000</option>
							    <option value="2500">2500</option>
							    <option value="3000">3000</option>
							    <option value="3500">3500</option>
							    <option value="4000">4000</option>
							  </select>
							</div>
		                	 <textarea onChange={(e) => {
		                    	this.setState({
									description: e.target.value
		                    	})
		                    }} placeholder={this.state.description} name="description" type="text" className="txt_3"></textarea>
		                     <input type="submit" value="submit" name="submit" className="txt2"/>
		                </form>
		            </div>
		            </div>
		        </div>
		);
	};
	renderTuesday = () => {
		return (
		    <div className="col-md-9">
				<div className="form_main">
		                <h4 className="heading"><strong>Register calories for </strong> TUESDAY <span></span></h4>
		                <div className="form">
		                <form onSubmit={this.handleSubmitTuesday} id="contactFrm" name="contactFrm">
		                    <input onChange={(e) => {
		                    	this.setState({
									activity: e.target.value
		                    	})
		                    }} type="text" required="" placeholder={this.state.activity} name="name" className="txt"/>
		                   		                   <div className="input-group mb-3">
							  <div className="input-group-prepend">
							    <label className="input-group-text" htmlFor="inputGroupSelect01">Calories burned</label>
							  </div>
							  <select onChange={(e) => {
							  	this.setState({
							  		caloriesBurned: e.target.value
							  	})
							  }} className="custom-select" id="inputGroupSelect01">
							    <option defaultValue>Choose...</option>
							    <option value="100">100</option>
							    <option value="200">200</option>
							    <option value="300">300</option>
							    <option value="400">400</option>
							    <option value="500">500</option>
							    <option value="600">600</option>
							    <option value="700">700</option>
							    <option value="800">800</option>
							    <option value="900">900</option>
							    <option value="1000">1000</option>
							    <option value="1100">1100</option>
							    <option value="1200">1200</option>
							    <option value="1300">1300</option>
							    <option value="1400">1400</option>
							    <option value="1500">1500</option>
							    <option value="1600">1600</option>
							    <option value="1700">1700</option>
							    <option value="1800">1800</option>
							    <option value="1900">1900</option>
							    <option value="2000">2000</option>
							    <option value="2500">2500</option>
							    <option value="3000">3000</option>
							    <option value="3500">3500</option>
							    <option value="4000">4000</option>
							  </select>
							</div>
		                	 <textarea onChange={(e) => {
		                    	this.setState({
									description: e.target.value
		                    	})
		                    }} placeholder={this.state.description} name="description" type="text" className="txt_3"></textarea>
		                     <input type="submit" value="submit" name="submit" className="txt2"/>
		                </form>
		            </div>
		            </div>
		        </div>
		);
	};
	renderWednesday = () => {
		return (
		    <div className="col-md-9">
				<div className="form_main">
		                <h4 className="heading"><strong>Register calories for </strong> WEDNESDAY <span></span></h4>
		                <div className="form">
		                <form onSubmit={this.handleSubmitWednesday} id="contactFrm" name="contactFrm">
		                    <input onChange={(e) => {
		                    	this.setState({
									activity: e.target.value
		                    	})
		                    }} type="text" required="" placeholder={this.state.activity} name="name" className="txt"/>
		                    <div className="input-group mb-3">
							  <div className="input-group-prepend">
							    <label className="input-group-text" htmlFor="inputGroupSelect01">Calories burned</label>
							  </div>
							  <select onChange={(e) => {
							  	this.setState({
							  		caloriesBurned: e.target.value
							  	})
							  }} className="custom-select" id="inputGroupSelect01">
							    <option defaultValue>Choose...</option>
							    <option value="100">100</option>
							    <option value="200">200</option>
							    <option value="300">300</option>
							    <option value="400">400</option>
							    <option value="500">500</option>
							    <option value="600">600</option>
							    <option value="700">700</option>
							    <option value="800">800</option>
							    <option value="900">900</option>
							    <option value="1000">1000</option>
							    <option value="1100">1100</option>
							    <option value="1200">1200</option>
							    <option value="1300">1300</option>
							    <option value="1400">1400</option>
							    <option value="1500">1500</option>
							    <option value="1600">1600</option>
							    <option value="1700">1700</option>
							    <option value="1800">1800</option>
							    <option value="1900">1900</option>
							    <option value="2000">2000</option>
							    <option value="2500">2500</option>
							    <option value="3000">3000</option>
							    <option value="3500">3500</option>
							    <option value="4000">4000</option>
							  </select>
							</div>
		                	 <textarea onChange={(e) => {
		                    	this.setState({
									description: e.target.value
		                    	})
		                    }} placeholder={this.state.description} name="description" type="text" className="txt_3"></textarea>
		                     <input type="submit" value="submit" name="submit" className="txt2"/>
		                </form>
		            </div>
		            </div>
		        </div>
		);
	};
	renderThursday = () => {
		return (
		    <div className="col-md-9">
				<div className="form_main">
		                <h4 className="heading"><strong>Register calories for </strong> THURSDAY <span></span></h4>
		                <div className="form">
		                <form onSubmit={this.handleSubmitThursday} id="contactFrm" name="contactFrm">
		                   <input onChange={(e) => {
		                    	this.setState({
									activity: e.target.value
		                    	})
		                    }} type="text" required="" placeholder={this.state.activity} name="name" className="txt"/>
		                   	<div className="input-group mb-3">
							  <div className="input-group-prepend">
							    <label className="input-group-text" htmlFor="inputGroupSelect01">Calories burned</label>
							  </div>
							  <select onChange={(e) => {
							  	this.setState({
							  		caloriesBurned: e.target.value
							  	})
							  }} className="custom-select" id="inputGroupSelect01">
							    <option defaultValue>Choose...</option>
							    <option value="100">100</option>
							    <option value="200">200</option>
							    <option value="300">300</option>
							    <option value="400">400</option>
							    <option value="500">500</option>
							    <option value="600">600</option>
							    <option value="700">700</option>
							    <option value="800">800</option>
							    <option value="900">900</option>
							    <option value="1000">1000</option>
							    <option value="1100">1100</option>
							    <option value="1200">1200</option>
							    <option value="1300">1300</option>
							    <option value="1400">1400</option>
							    <option value="1500">1500</option>
							    <option value="1600">1600</option>
							    <option value="1700">1700</option>
							    <option value="1800">1800</option>
							    <option value="1900">1900</option>
							    <option value="2000">2000</option>
							    <option value="2500">2500</option>
							    <option value="3000">3000</option>
							    <option value="3500">3500</option>
							    <option value="4000">4000</option>
							  </select>
							</div>
		                	 <textarea onChange={(e) => {
		                    	this.setState({
									description: e.target.value
		                    	})
		                    }} placeholder={this.state.description} name="description" type="text" className="txt_3"></textarea>
		                     <input type="submit" value="submit" name="submit" className="txt2"/>
		                </form>
		            </div>
		            </div>
		        </div>
		);
	};
	renderFriday = () => {
		return (
		    <div className="col-md-9">
				<div className="form_main">
		                <h4 className="heading"><strong>Register calories for </strong> FRIDAY <span></span></h4>
		                <div className="form">
		                <form onSubmit={this.handleSubmitFriday} id="contactFrm" name="contactFrm">
		                   <input onChange={(e) => {
		                    	this.setState({
									activity: e.target.value
		                    	})
		                    }} type="text" required="" placeholder={this.state.activity} name="name" className="txt"/>
		                   	<div className="input-group mb-3">
							  <div className="input-group-prepend">
							    <label className="input-group-text" htmlFor="inputGroupSelect01">Calories burned</label>
							  </div>
							  <select onChange={(e) => {
							  	this.setState({
							  		caloriesBurned: e.target.value
							  	})
							  }} className="custom-select" id="inputGroupSelect01">
							    <option defaultValue>Choose...</option>
							    <option value="100">100</option>
							    <option value="200">200</option>
							    <option value="300">300</option>
							    <option value="400">400</option>
							    <option value="500">500</option>
							    <option value="600">600</option>
							    <option value="700">700</option>
							    <option value="800">800</option>
							    <option value="900">900</option>
							    <option value="1000">1000</option>
							    <option value="1100">1100</option>
							    <option value="1200">1200</option>
							    <option value="1300">1300</option>
							    <option value="1400">1400</option>
							    <option value="1500">1500</option>
							    <option value="1600">1600</option>
							    <option value="1700">1700</option>
							    <option value="1800">1800</option>
							    <option value="1900">1900</option>
							    <option value="2000">2000</option>
							    <option value="2500">2500</option>
							    <option value="3000">3000</option>
							    <option value="3500">3500</option>
							    <option value="4000">4000</option>
							  </select>
							</div>
		                	 <textarea onChange={(e) => {
		                    	this.setState({
									description: e.target.value
		                    	})
		                    }} placeholder={this.state.description} name="description" type="text" className="txt_3"></textarea>
		                     <input type="submit" value="submit" name="submit" className="txt2"/>
		                </form>
		            </div>
		            </div>
		        </div>
		);
	};
	renderSaturday = () => {
		return (
		    <div className="col-md-9">
				<div className="form_main">
		                <h4 className="heading"><strong>Register calories for </strong> SATURDAY <span></span></h4>
		                <div className="form">
		                <form onSubmit={this.handleSubmitSaturday} id="contactFrm" name="contactFrm">
		                    <input onChange={(e) => {
		                    	this.setState({
									activity: e.target.value
		                    	})
		                    }} type="text" required="" placeholder={this.state.activity} name="name" className="txt"/>
		                   	<div className="input-group mb-3">
							  <div className="input-group-prepend">
							    <label className="input-group-text" htmlFor="inputGroupSelect01">Calories burned</label>
							  </div>
							  <select onChange={(e) => {
							  	this.setState({
							  		caloriesBurned: e.target.value
							  	})
							  }} className="custom-select" id="inputGroupSelect01">
							    <option defaultValue>Choose...</option>
							    <option value="100">100</option>
							    <option value="200">200</option>
							    <option value="300">300</option>
							    <option value="400">400</option>
							    <option value="500">500</option>
							    <option value="600">600</option>
							    <option value="700">700</option>
							    <option value="800">800</option>
							    <option value="900">900</option>
							    <option value="1000">1000</option>
							    <option value="1100">1100</option>
							    <option value="1200">1200</option>
							    <option value="1300">1300</option>
							    <option value="1400">1400</option>
							    <option value="1500">1500</option>
							    <option value="1600">1600</option>
							    <option value="1700">1700</option>
							    <option value="1800">1800</option>
							    <option value="1900">1900</option>
							    <option value="2000">2000</option>
							    <option value="2500">2500</option>
							    <option value="3000">3000</option>
							    <option value="3500">3500</option>
							    <option value="4000">4000</option>
							  </select>
							</div>
		                	 <textarea onChange={(e) => {
		                    	this.setState({
									description: e.target.value
		                    	})
		                    }} placeholder={this.state.description} name="description" type="text" className="txt_3"></textarea>
		                     <input type="submit" value="submit" name="submit" className="txt2"/>
		                </form>
		            </div>
		            </div>
		        </div>
		);
	}
	render() {
		const { sunClicked, monClicked, tuesClicked, wedClicked, thurClicked, friClicked, satClicked } = this.state;
		return (
		<div>
			<div>
				<canvas id="myChart" width="400" height="400"></canvas>
			
			</div>
			
			<div>
			<div className="container-fluid">
					<div className="row">
					<div className="col-md-3">
					<div className="row btn_row">
						<button onClick={this.renderSunday, () => {
									this.setState({
										sunClicked: true,
										monClicked: false,
										tuesClicked: false,
										wedClicked: false,
										thurClicked: false,
										friClicked: false,
										satClicked: false
									})
						}} className="btn btn-success">Add calories for sunday</button>
					</div>
					<div className="row btn_row">
						<button onClick={this.renderMongday, () => {
									this.setState({
										sunClicked: false,
										monClicked: true,
										tuesClicked: false,
										wedClicked: false,
										thurClicked: false,
										friClicked: false,
										satClicked: false
									})
						}} className="btn btn-danger">Add calories for monday</button>
					</div>
					<div className="row btn_row">
						<button onClick={this.renderTuesday, () => {
									this.setState({
										sunClicked: false,
										monClicked: false,
										tuesClicked: true,
										wedClicked: false,
										thurClicked: false,
										friClicked: false,
										satClicked: false
									})
						}} className="btn btn-primary">Add calories for tuesday</button>
					</div>
					<div className="row btn_row">
						<button onClick={this.renderWednesday, () => {
									this.setState({
										sunClicked: false,
										monClicked: false,
										tuesClicked: false,
										wedClicked: true,
										thurClicked: false,
										friClicked: false,
										satClicked: false
									})
						}} className="btn btn-info">Add calories for wednesday</button>
					</div>
					<div className="row btn_row">
						<button onClick={this.renderThursday, () => {
									this.setState({
										sunClicked: false,
										monClicked: false,
										tuesClicked: false,
										wedClicked: false,
										thurClicked: true,
										friClicked: false,
										satClicked: false
									})
						}} className="btn btn-warning">Add calories for thrusday</button>
					</div>
					<div className="row btn_row">
						<button onClick={this.renderFriday, () => {
									this.setState({
										sunClicked: false,
										monClicked: false,
										tuesClicked: false,
										wedClicked: false,
										thurClicked: false,
										friClicked: true,
										satClicked: false
									})
						}} className="btn btn-success">Add calories for friday</button>
					</div>
					<div className="row btn_row">
						<button onClick={this.renderSaturday, () => {
									this.setState({
										sunClicked: false,
										monClicked: false,
										tuesClicked: false,
										wedClicked: false,
										thurClicked: false,
										friClicked: false,
										satClicked: true
									})
						}} className="btn btn-danger">Add calories for saturday</button>
					</div>
					</div>
					{sunClicked ? this.renderSunday() : null}
					{monClicked ? this.renderMonday() : null}
					{tuesClicked ? this.renderTuesday() : null}
					{wedClicked ? this.renderWednesday() : null}
					{thurClicked ? this.renderThursday() : null}
					{friClicked ? this.renderFriday() : null}
					{satClicked ? this.renderSaturday() : null}
{/*				    <div className="col-md-9">
						<div className="form_main">
				                <h4 className="heading"><strong>Register calories for </strong> Sunday <span></span></h4>
				                <div className="form">
				                <form onSubmit={this.handleSubmit} id="contactFrm" name="contactFrm">
				                    <input type="text" required="" placeholder="Please input your Name" value="" name="name" className="txt"/>
				                    <input type="text" required="" placeholder="Please input your mobile No" value="" name="mob" className="txt"/>
				                    <input type="text" required="" placeholder="Please input your Email" value="" name="email" className="txt"/>
				                    
				                	 <textarea placeholder="Your Message" name="mess" type="text" className="txt_3"></textarea>
				                     <input type="submit" value="submit" name="submit" className="txt2"/>
				                </form>
				            </div>
				            </div>
				        </div>*/}
					</div>
				</div>
			</div>
		</div>
		);
	}
}
export default DietChart;