import React, { Component } from 'react';
import "./css/style.css";
import "./css/ui.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Chart from "chart.js";
import TradingDashboard from "../dashboard/main.js";
import axios from "axios";
import moment from "moment";
import AsksBids from "./BTC/bitcoin-dash/asks-bids.js";

const CRYPTO_QUERY = gql`
	query {
		data {
			currency
			id
			price
			price_date
			symbol
			circulating_supply
			max_supply
			name
			logo_url
			market_cap
			rank
			high
			high_timestamp	
		}	
	}
`;

class Exchange extends Component {
constructor () {
	super();

	this.state = {
		thirtyInterval: [],
		headerData: [],
		highLowData: [],
		bidsAsks: []
	}
}
	componentDidMount () {

	const proxyurl = "https://cors-anywhere.herokuapp.com/";

	axios.get(proxyurl + "https://api.nomics.com/v1/exchange_candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=30m&exchange=binance&market=BTCUSDT&start=2019-07-14T00%3A00%3A00Z&end=2029-07-14T00%3A00%3A00Z").then((res) => {
		this.setState({
			thirtyInterval: res.data
		})
	}).catch((err) => {
		console.log(err);
	})
	
	axios.get(proxyurl + "https://api.nomics.com/v1/currencies/ticker?key=561df32fa25fd3d93ae7064e0da5c8a2&ids=BTC&interval=1d").then((res) => {
		console.log(res.data)
		this.setState({
			headerData: res.data
		})
	}).catch((err) => {
		console.log(err);
	})
	let dateOriginal = new Date().toISOString();
	
	let first = dateOriginal.split("T")[0];

	let days = 0;
	var date = new Date(first);
	var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
	let convert = last.toISOString();

	console.log(convert);


	axios.get(proxyurl + `https://api.nomics.com/v1/exchange_candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1d&exchange=binance&market=BTCUSDT&start=${convert}&end=${dateOriginal}`).then((res) => {
		this.setState({
			highLowData: res.data
		})
	}).catch((err) => {
		console.log(err);
	})


	  const TradingView = window.TradingView;
      new TradingView.widget(
        {
        "width": "100%",
        "height": 450,
        "symbol": "COINBASE:BTCUSD",
        "interval": "30",
        "timezone": "Etc/UTC",
        "theme": "Dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_b1b00"
      }
        );
		var options = {
				  bezierCurve : true,
				  legend: {
				    display: false,
				  },
				  scales: {
				    xAxes: [{
				      gridLines: {
				        display: false,
				        drawBorder: false,
				      },
				      ticks: {
				        display: false,
				      }
				    }],
				    yAxes: [{
				      gridLines: {
				          display: false,
				          drawBorder: false,
				      },
				      ticks: {
				        display: false,
				        beginAtZero: true,
				      }
				    }]
				  },
				  elements: {
				      point:{
				          radius: 0
				      }
				  }
				};

				var charts = document.getElementsByClassName("crypt-marketcap-canvas");
				if(charts.length > 0){
				  for( let chart of charts ){
				    let data = JSON.parse(chart.dataset.charts);
				    let bg = chart.dataset.bg;
				    let border = chart.dataset.border;

				    let canvas = chart.querySelector('canvas');
				    let ctx = canvas.getContext('2d');

				    var gradient = ctx.createLinearGradient(0, 0, 0, 70);
				      gradient.addColorStop(0, "transparent" );
				      gradient.addColorStop(1, "transparent");
				    let lineChartData = {
				      labels : ["1","2","3","4","5","6","7","8","9"],
				      datasets : [
				          {
				              backgroundColor : gradient,
				              borderColor : '#' + border,
				              data : data,
				              bezierCurve : true
				          }
				      ]  
				    }
			    new Chart(ctx, {
			      type:"line",
			      data:lineChartData,
			      options:options
			    });
			  }
			}


			var optionsForIndiv = {
			  bezierCurve : true,
			  legend: {
			    display: false,
			  },
			  scales: {
			    xAxes: [{
			      gridLines: {
			        display: false,
			        drawBorder: false,
			      },
			      ticks: {
			        display: false,
			      }
			    }],
			    yAxes: [{
			      gridLines: {
			          display: false,
			          drawBorder: false,
			      },
			      ticks: {
			        display: false,
			        beginAtZero: true,
			      }
			    }]
			  },
			  elements: {
			      point:{
			          radius: 0
			      }
			  }
			};

			var chartsIndiv = document.getElementsByClassName("crypt-individual-marketcap");
			if(chartsIndiv.length > 0){
			  for( let chart of chartsIndiv ){
			    let data = JSON.parse(chart.dataset.charts);
			    let bg = chart.dataset.bg;
			    let border = chart.dataset.border;

			    let canvas = chart.querySelector('canvas');
			    let ctx = canvas.getContext('2d');

			    var gradient = ctx.createLinearGradient(0, 0, 0, 150);
			      gradient.addColorStop(0, "#" + bg);
			      gradient.addColorStop(1, "transparent");
			    let lineChartData = {
			      labels : ["1","2","3","4","5","6","7","8","9"],
			      datasets : [
			          {
			              backgroundColor : gradient,
			              borderColor : '#' + border,
			              data : data,
			              bezierCurve : true
			          }
			      ]  
			    }
			    new Chart(ctx, {
			      type:"line",
			      data: lineChartData,
			      options: optionsForIndiv
			    });
			  }
			}
	}
	render() {
		return (
<div className="background_black">
    <div className="container-fluid">
        <div className="row sm-gutters">
            <div className="col-md-6 col-lg-6 col-xl-3 col-xxl-2">
                <div className="crypt-market-status mt-4">
                    <div>
                        <ul className="nav nav-tabs" id="crypt-tab">
                            <li role="presentation"><a href="#usd" className="active" data-toggle="tab">usd</a></li>
                            <li role="presentation"><a href="#btc" data-toggle="tab">bids - asks</a></li>
                            <li role="presentation"><a href="#eth" data-toggle="tab">eth</a></li>
                        </ul>
                        <div className="tab-content crypt-tab-content">
                            <div role="tabpanel" className="tab-pane active" id="usd">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Coin</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody className="crypt-table-hover">
                                 <Query query={CRYPTO_QUERY}>
									{
										({ loading, error, data }) => {
											if (loading) {
												return null
											}
											if (error) {
												console.log(error);
											}
											const size = 11;
											var items = data.data.slice(0, size).map(iteration => {
												return iteration													
											});	
											return items.map((item, index) => {
												return (
													 <tr key={index}>
			                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src={item.logo_url} width="15"/> {item.name}</td>
			                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">{item.price}</span></td>
			                                            <td> <span className="d-block">{item.high}</span>
			                                             {/* <b className="crypt-down">-7.7%</b> */}
			                                             </td>
			                                        </tr>
												);
											})
										}
									}
								</Query>

                                    </tbody>
                                </table>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="btc">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Bids + Asks Data</th>
                                            {/*<th scope="col">Bids</th>
                                            <th scope="col">Asks</th>*/}
                                        </tr>
                                    </thead>
                                    <tbody className="table_body">
								{/* ASKS BIDS COMPONENT IMPORTED */}
                                        <AsksBids />
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="eth">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Coin</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> BTC/ETH</td>
                                            <td className="crypt-down align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000056</span></td>
                                            <td> <span className="d-block">5.3424984</span> <b className="crypt-down">-5.4%</b> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> LTC/BTC</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.0000564</span></td>
                                            <td> <span className="d-block">6.6768876</span> <span>6.7%</span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> ETH/BTC</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.0000234</span></td>
                                            <td> <span className="d-block">6.6768876</span> <b className="crypt-down">-7.7%</b> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> DOGE/ETH</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                            <td> <span className="d-block">6.6768876</span> <b className="crypt-up">+3.7%</b> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> XMR/USTD</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                            <td> <span className="d-block">6.6768876</span> <span>3.7%</span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> DOGE/USTD</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                            <td> <span className="d-block">6.6768876</span> <span className="crypt-up"><b>+3.7%</b></span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> XMR/USTD</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                            <td> <span className="d-block">6.6768876</span> <span className="crypt-up"><b>+3.7%</b></span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> DOGE/BTC</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                            <td> <span className="d-block">6.6768876</span> <span className="crypt-up"><b>+3.7%</b></span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> XMR/USTD</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                            <td> <span className="d-block">9.34546</span> <span>6.7%</span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> DOGE/BTC</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                            <td> <span className="d-block">9.34546</span> <span>6.7%</span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> PQR/STU</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                            <td> <span className="d-block">9.34546</span> <span>6.7%</span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> DOGE/BTC</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                            <td> <span className="d-block">6.6768876</span> <span className="crypt-up"><b>+3.7%</b></span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> XMR/USTD</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                            <td> <span className="d-block">9.34546</span> <span>6.7%</span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> DOGE/BTC</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                            <td> <span className="d-block">9.34546</span> <span>6.7%</span> </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><img className="crypt-star pr-1" alt="star" src="images/star.svg" width="15"/> PQR/STU</td>
                                            <td className="align-middle"><span className="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                            <td> <span className="d-block">9.34546</span> <span>6.7%</span> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-8">
                <div className="crypt-gross-market-cap mt-4">
                    <div className="row">
                        <div className="col-3 col-sm-6 col-md-6 col-lg-6">
                            <div className="row">
                            {this.state.headerData.map((item, index) => {
								return (
									<div key={index} className="col-sm-6 col-md-6 col-lg-6">
	                                    <p>Last Price BTC</p>
	                                    <p>{item.price}</p>
	                                </div>
	                            );		
								})}
                        		{this.state.headerData.map((item, index) => {
									for (let key in item) {
										if (typeof item[key] === "object") {
											return (
											
												<div key={index} className="col-sm-6 col-md-6 col-lg-6">
				                                    <p>Change BTC</p>
				                                    {item[key].price_change > 0 ? <p className="crypt-up">{item[key].price_change} <span className="text-white">{Math.round(item[key].price_change_pct * 100) / 100}%</span></p> : <p className="crypt-down">{item[key].price_change} <span className="text-white">{item[key].price_change_pct}</span></p>}
				                                </div>
						              
			                               );
										};
									};
								})}
                            </div>
                        </div>
                       {this.state.highLowData.map((item, index) => {
                       	
							return (
							<React.Fragment key={index}>
								<div className="col-3 col-sm-2 col-md-3 col-lg-2">
                            		<p>High BTC</p>
		                            {item.open < item.close ? <p className="crypt-up">{item.high}</p> : <p className="crypt-down">{item.high}</p>}
		                        </div>
		                        <div className="col-3 col-sm-2 col-md-3 col-lg-2">
		                            <p>Low BTC</p>
		                            <p className="crypt-down">{item.low}</p>
		                        </div>
		                        <div className="col-3 col-sm-2 col-md-3 col-lg-2">
		                            <p>Volume 24Hr</p>
		                            <p className="crypt-down">{item.volume}</p>
		                        </div>
		                    </React.Fragment>
                            );		
						})}
                    </div>
                </div>
                <div className="tradingview-widget-container mb-3">
                    <div id="crypt-candle-chart"></div>
                </div>

	


             {/*   <TradingDashboard />*/}
			{/* WIDGET BEGIN TRADING VIEW */}
	
			<div className="tradingview-widget-container">
			  <div id="tradingview_b1b00"></div>
			</div>


            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 col-xxl-2">
                <div className="crypt-market-status mt-4">
                    <div>
                        <ul className="nav nav-tabs">
                            <li role="presentation"><a href="#history" className="active" data-toggle="tab">history</a></li>
                            <li role="presentation"><a href="#market-trading" data-toggle="tab">market trading</a></li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="history">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Time</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.thirtyInterval.slice(0, 12).map((item, index) => {
                                    	let h = new Date(item.timestamp).getHours();
                                    	let m = new Date(item.timestamp).getMinutes();
                                    	return (
											<tr key={index}>
	                                            <td>{m === 0 ? h + ":" + m + "0" : h + ":" + m}</td>
	                                            {item.open < item.close ? <td className="crypt-up">{Math.round(item.open)}</td> : <td className="crypt-down">{Math.round(item.open)}</td>}
	                                            <td>{item.volume}</td>
	                                        </tr>
                                    	);
                                    })}
                                        
                           
                                   
                                    </tbody>
                                </table>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="market-trading">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Time</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000564</td>
                                            <td>6.6768876</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-down">0.000056</td>
                                            <td>5.3424984</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-up">0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000567</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-up">0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000567</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000564</td>
                                            <td>6.6768876</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-down">0.000056</td>
                                            <td>5.3424984</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-up">0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000567</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-up">0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000567</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000564</td>
                                            <td>6.6768876</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-down">0.000056</td>
                                            <td>5.3424984</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-up">0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td>0.0000567</td>
                                            <td>4.3456600</td>
                                        </tr>
                                        <tr>
                                            <td>22:35:59</td>
                                            <td className="crypt-up">0.0000234</td>
                                            <td>4.3456600</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row sm-gutters">
            <div className="col-xl-5">
                <div className="crypt-boxed-area">
                    <h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
                    <div className="row no-gutters back_white">
                        <div className="col-md-6">
                            <div className="crypt-buy-sell-form">
                                <p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
                                <div className="crypt-buy">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Price</span> </div>
                                        <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Amount</span> </div>
                                        <input type="number" className="form-control"/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Total</span> </div>
                                        <input type="text" className="form-control" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div>
                                        <p>Fee: <span className="fright">100%x0.2=0.02</span></p>
                                    </div>
                                    <div className="text-center mt-3 mb-3 crypt-up">
                                        <p>You will approximately pay</p>
                                        <h4>0.09834 BTC</h4></div>
                                    <div className="menu-green"><a href="" className="crypt-button-green-full">Buy</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="crypt-buy-sell-form">
                                <p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
                                <div className="crypt-sell">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Price</span> </div>
                                        <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Amount</span> </div>
                                        <input type="number" className="form-control"/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Total</span> </div>
                                        <input type="text" className="form-control" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div>
                                        <p>Fee: <span className="fright">100%x0.2=0.02</span></p>
                                    </div>
                                    <div className="text-center mt-3 mb-3 crypt-down">
                                        <p>You will approximately pay</p>
                                        <h4>0.09834 BTC</h4></div>
                                    <div><a href="" className="crypt-button-red-full">Sell</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-7">
                <div>
                    <div className="crypt-market-status">
                        <div>
                            <ul className="nav nav-tabs">
                                <li role="presentation"><a href="#active-orders" className="active" data-toggle="tab">Active Orders</a></li>
                                <li role="presentation"><a href="#closed-orders" data-toggle="tab">Closed Orders</a></li>
                                <li role="presentation"><a href="#balance" data-toggle="tab">Balance</a></li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="active-orders">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className="hover_change">
                                                <th scope="col">Time</th>
                                                <th scope="col">Buy/sell</th>
                                                <th scope="col">Price BTC</th>
                                                <th scope="col">Amount BPS</th>
                                                <th scope="col">Dealt BPS</th>
                                                <th scope="col">Operation</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <div className="no-orders text-center"><img style={{ width: "150px", height: "150px", paddingBottom: "50px" }} src={require("../../../images/network.png")} alt="no-orders"/></div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="closed-orders">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className="hover_change">
                                                <th scope="col">Time</th>
                                                <th scope="col">Buy/sell</th>
                                                <th scope="col">Price BTC</th>
                                                <th scope="col">Amount BPS</th>
                                                <th scope="col">Dealt BPS</th>
                                                <th scope="col">Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-up">Buy</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-down">Sell</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-up">Buy</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-down">Sell</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-up">Buy</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-down">Sell</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-up">Buy</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-down">Sell</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.000056</td>
                                                <td className="crypt-down">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr className="hover_change">
                                                <th>22:35:59</th>
                                                <td className="crypt-up">Buy</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.000056</td>
                                                <td className="crypt-up">0.0003456</td>
                                                <td>5.3424984</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="balance">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Currency</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>BTC</th>
                                                <td>0.0000564</td>
                                                <td>6.6768876</td>
                                            </tr>
                                            <tr>
                                                <th>ETC</th>
                                                <td>0.000056</td>
                                                <td>5.3424984</td>
                                            </tr>
                                            <tr>
                                                <th>LTC</th>
                                                <td>0.0000234</td>
                                                <td>4.3456600</td>
                                            </tr>
                                            <tr>
                                                <th>XMR</th>
                                                <td>0.0000234</td>
                                                <td>4.3456600</td>
                                            </tr>
                                            <tr>
                                                <th>BIT</th>
                                                <td>0.0000567</td>
                                                <td>4.3456600</td>
                                            </tr>
                                            <tr>
                                                <th>EGF</th>
                                                <td>0.0000234</td>
                                                <td>4.3456600</td>
                                            </tr>
                                            <tr>
                                                <th>EER</th>
                                                <td>0.0000567</td>
                                                <td>4.3456600</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		);
	}
}
export default Exchange;