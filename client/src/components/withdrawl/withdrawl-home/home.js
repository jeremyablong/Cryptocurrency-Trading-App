import React, { Component } from 'react';
import "../../trade-dashboard/actual-dashboard/css/style.css";

class WithdrawlHome extends Component {
	render() {
		return (
			<div>
<div className="crypt-side-menu crypt-left-sided crypt-floatable-menu bg-white">
		<ul>
			<li><a href=""><i className="pe-7s-graph1"></i> Dashboard</a></li>
		</ul>
		<hr/>
		<p>Market</p>
		<ul>
			<li><a href=""><i className="pe-7s-way"></i> Exchange</a></li>
			<li><a href=""><i className="pe-7s-gym"></i> Leverage</a></li>
		</ul>
		<hr/>
		<p>Account</p>
		<ul>
			<li><a href=""><i className="pe-7s-wallet"></i> Wallet</a></li>
			<li><a href=""><i className="pe-7s-cash"></i> Card</a></li>
			<li><a href=""><i className="pe-7s-wristwatch"></i> History</a></li>
		</ul>
	</div>	
	<div className="container-full-width">
		<div className="row sm-gutters">
			<div className="col-xl-2 d-none d-xl-block">	
			</div>
			<div className="col-md-3 col-lg-4 col-xl-4">
				<div className="crypt-deepblue-segment p-2 mt-3">
					<form className="crypt-dash-search">
						<input type="search" placeholder="Search..." name="s" className="crypt-big-search"/>
						<button type="submit">
						    <i className="pe-7s-search"></i>
						</button>
					</form>
					<ul className="crypt-big-list crypt-coin-select">
						<li>
							<a href="#bitcoin">
								<img src="images/coins/btc.png" width="25" className="crypt-market-cap-logo pr-2" alt="coin"/> Bitcoin <p className="fright"><b>$456568</b></p>
							</a>
						</li>
						<li>
							<a href="#ethrium">
								<img src="images/coins/eth.png" width="25" className="crypt-market-cap-logo pr-2" alt="coin"/> Ethrium <p className="fright"><b>$456568</b></p>
							</a>
						</li>
						<li>
							<a href="#litecoin">
								<img src="images/coins/ltc.png" width="25" className="crypt-market-cap-logo pr-2" alt="coin"/> Litecoin <p className="fright crypt-down"><b>$456568</b></p>
							</a>
						</li>
						<li>
							<a href="#xrp">
								<img src="images/coins/xrp.png" width="25" className="crypt-market-cap-logo pr-2" alt="coin"/> XRP <p className="fright"><b>$456568</b></p>
							</a>
						</li>
						<li>
							<a href="#monero">
								<img src="images/coins/monero.png" width="25" className="crypt-market-cap-logo pr-2" alt="coin"/> Monero <p className="fright"><b>$456568</b></p>
							</a>
						</li>
						<li>
							<a href="#zilliqua">
								<img src="images/coins/zil.png" width="25" className="crypt-market-cap-logo pr-2" alt="coin"/> Zilliqua <p className="fright"><b>$456568</b></p>
							</a>
						</li>
						<li>
							<a href="#dash">
								<img src="images/coins/dash.png" width="25" className="crypt-market-cap-logo pr-2" alt="coin"/> Dash <p className="fright"><b>$456568</b></p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-md-9 col-lg-8 col-xl-6">
				<div className="crypt-dash-withdraw mt-3 d-block" id="bitcoin">
					<div className="crypt-withdraw-heading">
						<div className="row">
							<div className="col-md-3">
								<p><b>1 BTC</b></p>
								<p className="crypt-up"><b>$3,483.59 USD (0.28%) </b></p>
							</div>
							<div className="col-md-5">
								<i className="pe-7s-lock icon-big"></i> 
								<p><b>Locked: $ 0.00</b></p>
							</div>
							<div className="col-md-4">
								<p><b>Total:</b></p>
								<p className="crypt-up"><b> $ 23454.00</b></p>
							</div>
						</div>
					</div>
					<div className="crypt-withdraw-body bg-white">
						<div className="row">
							<div className="col-md-3">
							<div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
								<a 
									className="nav-link active" 
									id="v-pills-zilliqua-btc-deposit-tab" 
									data-toggle="pill" 
									href="#v-pills-zilliqua-btc-deposit" 
									role="tab" 
									aria-controls="v-pills-zilliqua-btc-deposit" 
									aria-selected="true">
										<i className="pe-7s-bottom-arrow"></i> Deposit
								</a>

								<a 
									className="nav-link" 
									id="v-pills-zilliqua-btc-withdrawl-tab" 
									data-toggle="pill"
									href="#v-pills-zilliqua-btc-withdrawl" 
									role="tab" 
									aria-controls="v-pills-zilliqua-btc-withdrawl" 
									aria-selected="false">
										<i className="pe-7s-up-arrow"></i> Withdraw
								</a>

								<a 
									className="nav-link" 
									id="v-pills-zilliqua-btc-history-tab" 
									data-toggle="pill" 
									href="#v-pills-zilliqua-btc-history" 
									role="tab" 
									aria-controls="v-pills-zilliqua-btc-history" 
									aria-selected="false">
										<i className="pe-7s-clock"></i> History
								</a>

								<a 
									className="nav-link" 
									id="v-pills-zilliqua-btc-buysell-tab" 
									data-toggle="pill" 
									href="#v-pills-zilliqua-btc-buysell" 
									role="tab" 
									aria-controls="v-pills-zilliqua-btc-buysell" 
									aria-selected="false">
										<i className="pe-7s-refresh-2"></i> Buy / Sell
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content" id="v-pills-zilliqua-btc-tabContent">
							  	<div className="tab-pane fade show active" id="v-pills-zilliqua-btc-deposit" role="tabpanel" aria-labelledby="v-pills-zilliqua-btc-deposit-tab">
							  		<h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
							  		<p>Details - <a href="" className="crypt-up">Get VIP Now</a></p>
							  		<form className="deposit-form">
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-amount" id="payment-btc-amount1" className="payment-amount"/>
								  			<label for="payment-btc-amount1">$ 30000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-amount" id="payment-btc-amount2" className="payment-amount"/><label for="payment-btc-amount2">$ 20000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-amount" id="payment-btc-amount3" className="payment-amount"/><label for="payment-btc-amount3">$ 10000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-amount" id="payment-btc-amount4" className="payment-amount"/><label for="payment-btc-amount4">$ 5000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-amount" id="payment-btc-amount5" className="payment-amount"/><label for="payment-btc-amount5">$ 2000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-amount" id="payment-btc-amount6" className="payment-amount"/><label for="payment-btc-amount6">$ 1000 </label>
								  			<div className="check"></div>
						  				</div>
						  				<div className="form-group mt-2">
										    <select className="crypt-image-select" required>
										      	<option value="">Choose A Payment Option</option>
										      	<option value="1">Visa</option>
										      	<option value="2">Master Card</option>
										      	<option value="3">AMEX</option>
										    </select>
										</div>
										<div className="input-group input-text-select mb-3">
										  	<div className="input-group-prepend">
										    	<input placeholder="Amount" type="text" className="form-control crypt-input-lg"/>
										  	</div>
										  	<select className="custom-select" name="inputGroupSelect01">
										    	<option value="1">USD</option>
										    	<option value="2">GBP</option>
										    	<option value="3">EUR</option>
										  	</select>
										</div>
										<div className="text-center crypt-up mt-5 mb-5">
											<p>You will approximately pay</p>
											<h3>$500</h3>
										</div>
										<a href="" className="crypt-button-red-full">Proceed To Payment</a>
							  		</form>
							  	</div>
								<div className="tab-pane fade" id="v-pills-zilliqua-btc-withdrawl" role="tabpanel" aria-labelledby="v-pills-zilliqua-btc-withdrawl-tab">
									<h4 className="crypt-down">Wire bank transfer</h4>
							  		<p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
							  		<form>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Amount" className="form-control" name="amount"/>
										  	<div className="input-group-append">
										    	<span className="input-group-text">USD</span>
										  	</div>
										</div>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account"/>
										  	<div className="input-group-append">
											    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Other Address</button>
											    <div className="dropdown-menu">
											      <a className="dropdown-item" href="#">234235234</a>
											      <a className="dropdown-item" href="#">2343453453</a>
											      <a className="dropdown-item" href="#">234234234234</a>
											    </div>
											  </div>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Name" name="name"/>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Swift Code" name="swift"/>
										</div>
										<div className="form-group">
										    <div className="form-group">
											    <select className="form-control">
											      <option>Country</option>
											      <option>United States</option>
											      <option>India</option>
											      <option>Japan</option>
											      <option>Korea</option>
											      <option>China</option>
											    </select>
											</div>
										</div>
										<div className="form-group">
										    <div className="form-check">
										      	<input className="form-check-input" type="checkbox" id="recipient-btc"/>
										      	<label className="form-check-label" for="recipient-btc">
										        Add To recipient
										      	</label>
										    </div>
										</div>
										<a href="" className="crypt-button-red-full">Initiate Withdraw</a>
							  		</form>
								</div>
							  	<div className="tab-pane fade" id="v-pills-zilliqua-btc-history" role="tabpanel" aria-labelledby="v-pills-zilliqua-btc-history-tab">
							  		<table className="table table-striped">
									  	<thead>
										    <tr>
										      <th scope="col">Time</th>
										      <th scope="col">Amount</th>
										      <th scope="col">Currency</th>
										    </tr>
									  	</thead>
									  	<tbody>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td className="crypt-down">0.000056</td>
										      <td>BTC</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000564</td>
										      <td>ETH</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000234</td>
										      <td>XHO</td>
										    </tr>
									  	</tbody>
									</table>
							  	</div>
							  	<div className="tab-pane fade" id="v-pills-zilliqua-btc-buysell" role="tabpanel" aria-labelledby="v-pills-zilliqua-btc-buysell-tab">
							  		<div className="crypt-boxed-area">
										<h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
										<div className="row no-gutters">
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
													<div className="crypt-buy">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-up">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div className="menu-green">
															<a href="" className="crypt-button-green-full">Buy</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
													<div className="crypt-sell">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-down">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div>
															<a href="" className="crypt-button-red-full">Sell</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  	</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="crypt-dash-withdraw mt-3 d-none" id="ethrium">
					<div className="crypt-withdraw-heading">
						<div className="row">
							<div className="col-md-3">
								<p><b>1 ETH</b></p>
								<p className="crypt-up"><b>$109.13 USD (1.97%)</b></p>
							</div>
							<div className="col-md-5">
								<i className="pe-7s-lock icon-big"></i> 
								<p><b>Locked: $ 0.00</b></p>
							</div>
							<div className="col-md-4">
								<p><b>Total:</b></p>
								<p className="crypt-up"><b> $ 23454.00</b></p>
							</div>
						</div>
					</div>
					<div className="crypt-withdraw-body bg-white">
						<div className="row">
							<div className="col-md-3">
							<div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
								<a 
									className="nav-link active" 
									id="v-pills-ethrium-deposit-tab" 
									data-toggle="pill" 
									href="#v-pills-ethrium-deposit" 
									role="tab" 
									aria-controls="v-pills-ethrium-deposit" 
									aria-selected="true">
										<i className="pe-7s-bottom-arrow"></i> Deposit
								</a>

								<a 
									className="nav-link" 
									id="v-pills-ethrium-withdrawl-tab" 
									data-toggle="pill"
									href="#v-pills-ethrium-withdrawl" 
									role="tab" 
									aria-controls="v-pills-ethrium-withdrawl" 
									aria-selected="false">
										<i className="pe-7s-up-arrow"></i> Withdraw
								</a>

								<a 
									className="nav-link" 
									id="v-pills-ethrium-history-tab" 
									data-toggle="pill" 
									href="#v-pills-ethrium-history" 
									role="tab" 
									aria-controls="v-pills-ethrium-history" 
									aria-selected="false">
										<i className="pe-7s-clock"></i> History
								</a>

								<a 
									className="nav-link" 
									id="v-pills-ethrium-buysell-tab" 
									data-toggle="pill" 
									href="#v-pills-ethrium-buysell" 
									role="tab" 
									aria-controls="v-pills-ethrium-buysell" 
									aria-selected="false">
										<i className="pe-7s-refresh-2"></i> Buy / Sell
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content" id="v-pills-ethrium-tabContent">
							  	<div className="tab-pane fade show active" id="v-pills-ethrium-deposit" role="tabpanel" aria-labelledby="v-pills-ethrium-deposit-tab">
							  		<h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
							  		<p>Details - <a href="" className="crypt-up">Get VIP Now</a></p>
							  		<form className="deposit-form">
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-eth-amount" id="payment-eth-amount1" className="payment-eth-amount"/>
								  			<label for="payment-eth-amount1">$ 30000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-eth-amount" id="payment-eth-amount2" className="payment-eth-amount"/><label for="payment-eth-amount2">$ 20000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-eth-amount" id="payment-eth-amount3" className="payment-eth-amount"/><label for="payment-eth-amount3">$ 10000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-eth-amount" id="payment-eth-amount4" className="payment-eth-amount"/><label for="payment-eth-amount4">$ 5000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-eth-amount" id="payment-eth-amount5" className="payment-eth-amount"/><label for="payment-eth-amount5">$ 2000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-eth-amount" id="payment-eth-amount6" className="payment-eth-amount"/><label for="payment-eth-amount6">$ 1000 </label>
								  			<div className="check"></div>
						  				</div>
						  				<div className="form-group mt-2">
										    <select className="crypt-image-select" required>
										      	<option value="">Choose A Payment Option</option>
										      	<option value="1">Visa</option>
										      	<option value="2">Master Card</option>
										      	<option value="3">AMEX</option>
										    </select>
										</div>
										<div className="input-group input-text-select mb-3">
										  	<div className="input-group-prepend">
										    	<input placeholder="Amount" type="text" className="form-control crypt-input-lg"/>
										  	</div>
										  	<select className="custom-select" name="inputGroupSelect01">
										    	<option value="1">USD</option>
										    	<option value="2">GBP</option>
										    	<option value="3">EUR</option>
										  	</select>
										</div>
										<div className="text-center crypt-up mt-5 mb-5">
											<p>You will approximately pay</p>
											<h3>$500</h3>
										</div>
										<a href="" className="crypt-button-red-full">Proceed To Payment</a>
							  		</form>
							  	</div>
								<div className="tab-pane fade" id="v-pills-ethrium-withdrawl" role="tabpanel" aria-labelledby="v-pills-ethrium-withdrawl-tab">
									<h4 className="crypt-down">Wire bank transfer</h4>
							  		<p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
							  		<form>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Amount" className="form-control" name="amount"/>
										  	<div className="input-group-append">
										    	<span className="input-group-text">USD</span>
										  	</div>
										</div>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account"/>
										  	<div className="input-group-append">
											    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Other Address</button>
											    <div className="dropdown-menu">
											      <a className="dropdown-item" href="#">234235234</a>
											      <a className="dropdown-item" href="#">2343453453</a>
											      <a className="dropdown-item" href="#">234234234234</a>
											    </div>
											  </div>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Name" name="name"/>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Swift Code" name="swift"/>
										</div>
										<div className="form-group">
										    <div className="form-group">
											    <select className="form-control">
											      <option>Country</option>
											      <option>United States</option>
											      <option>India</option>
											      <option>Japan</option>
											      <option>Korea</option>
											      <option>China</option>
											    </select>
											</div>
										</div>
										<div className="form-group">
										    <div className="form-check">
										      	<input className="form-check-input" type="checkbox" id="recipient-eth"/>
										      	<label className="form-check-label" for="recipient-eth">
										        Add To recipient
										      	</label>
										    </div>
										</div>
										<a href="" className="crypt-button-red-full">Initiate Withdraw</a>
							  		</form>
								</div>
							  	<div className="tab-pane fade" id="v-pills-ethrium-history" role="tabpanel" aria-labelledby="v-pills-ethrium-history-tab">
							  		<table className="table table-striped">
									  	<thead>
										    <tr>
										      <th scope="col">Time</th>
										      <th scope="col">Amount</th>
										      <th scope="col">Currency</th>
										    </tr>
									  	</thead>
									  	<tbody>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td className="crypt-down">0.000056</td>
										      <td>BTC</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000564</td>
										      <td>ETH</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000234</td>
										      <td>XHO</td>
										    </tr>
									  	</tbody>
									</table>
							  	</div>
							  	<div className="tab-pane fade" id="v-pills-ethrium-buysell" role="tabpanel" aria-labelledby="v-pills-ethrium-buysell-tab">
							  		<div className="crypt-boxed-area">
										<h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
										<div className="row no-gutters">
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
													<div className="crypt-buy">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-up">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div className="menu-green">
															<a href="" className="crypt-button-green-full">Buy</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
													<div className="crypt-sell">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-down">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div>
															<a href="" className="crypt-button-red-full">Sell</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  	</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="crypt-dash-withdraw mt-3 d-none" id="litecoin">
					<div className="crypt-withdraw-heading">
						<div className="row">
							<div className="col-md-3">
								<p><b>1 LTC</b></p>
								<p className="crypt-up"><b>$34.05 USD (3.60%)</b></p>
							</div>
							<div className="col-md-5">
								<i className="pe-7s-lock icon-big"></i> 
								<p><b>Locked: $ 10.00</b></p>
							</div>
							<div className="col-md-4">
								<p><b>Total:</b></p>
								<p className="crypt-up"><b> $ 435,634,234.00</b></p>
							</div>
						</div>
					</div>
					<div className="crypt-withdraw-body bg-white">
						<div className="row">
							<div className="col-md-3">
							<div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
								<a 
									className="nav-link active" 
									id="v-pills-litecoin-deposit-tab" 
									data-toggle="pill" 
									href="#v-pills-litecoin-deposit" 
									role="tab" 
									aria-controls="v-pills-litecoin-deposit" 
									aria-selected="true">
										<i className="pe-7s-bottom-arrow"></i> Deposit
								</a>

								<a 
									className="nav-link" 
									id="v-pills-litecoin-withdrawl-tab" 
									data-toggle="pill"
									href="#v-pills-litecoin-withdrawl" 
									role="tab" 
									aria-controls="v-pills-litecoin-withdrawl" 
									aria-selected="false">
										<i className="pe-7s-up-arrow"></i> Withdraw
								</a>

								<a 
									className="nav-link" 
									id="v-pills-litecoin-history-tab" 
									data-toggle="pill" 
									href="#v-pills-litecoin-history" 
									role="tab" 
									aria-controls="v-pills-litecoin-history" 
									aria-selected="false">
										<i className="pe-7s-clock"></i> History
								</a>

								<a 
									className="nav-link" 
									id="v-pills-litecoin-buysell-tab" 
									data-toggle="pill" 
									href="#v-pills-litecoin-buysell" 
									role="tab" 
									aria-controls="v-pills-litecoin-buysell" 
									aria-selected="false">
										<i className="pe-7s-refresh-2"></i> Buy / Sell
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content" id="v-pills-litecoin-tabContent">
							  	<div className="tab-pane fade show active" id="v-pills-litecoin-deposit" role="tabpanel" aria-labelledby="v-pills-litecoin-deposit-tab">
							  		<h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
							  		<p>Details - <a href="" className="crypt-up">Get VIP Now</a></p>
							  		<form className="deposit-form">
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-litecoin-amount" id="payment-litecoin-amount1" className="payment-litecoin-amount"/>
								  			<label for="payment-litecoin-amount1">$ 30000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-litecoin-amount" id="payment-litecoin-amount2" className="payment-litecoin-amount"/><label for="payment-litecoin-amount2">$ 20000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-litecoin-amount" id="payment-litecoin-amount3" className="payment-litecoin-amount"/><label for="payment-litecoin-amount3">$ 10000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-litecoin-amount" id="payment-litecoin-amount4" className="payment-litecoin-amount"/><label for="payment-litecoin-amount4">$ 5000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-litecoin-amount" id="payment-litecoin-amount5" className="payment-litecoin-amount"/><label for="payment-litecoin-amount5">$ 2000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-litecoin-amount" id="payment-litecoin-amount6" className="payment-litecoin-amount"/><label for="payment-litecoin-amount6">$ 1000 </label>
								  			<div className="check"></div>
						  				</div>
						  				<div className="form-group mt-2">
										    <select className="crypt-image-select" required>
										      	<option value="">Choose A Payment Option</option>
										      	<option value="1">Visa</option>
										      	<option value="2">Master Card</option>
										      	<option value="3">AMEX</option>
										    </select>
										</div>
										<div className="input-group input-text-select mb-3">
										  	<div className="input-group-prepend">
										    	<input placeholder="Amount" type="text" className="form-control crypt-input-lg"/>
										  	</div>
										  	<select className="custom-select" name="inputGroupSelect01">
										    	<option value="1">USD</option>
										    	<option value="2">GBP</option>
										    	<option value="3">EUR</option>
										  	</select>
										</div>
										<div className="text-center crypt-up mt-5 mb-5">
											<p>You will approximately pay</p>
											<h3>$500</h3>
										</div>
										<a href="" className="crypt-button-red-full">Proceed To Payment</a>
							  		</form>
							  	</div>
								<div className="tab-pane fade" id="v-pills-litecoin-withdrawl" role="tabpanel" aria-labelledby="v-pills-litecoin-withdrawl-tab">
									<h4 className="crypt-down">Wire bank transfer</h4>
							  		<p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
							  		<form>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Amount" className="form-control" name="amount"/>
										  	<div className="input-group-append">
										    	<span className="input-group-text">USD</span>
										  	</div>
										</div>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account"/>
										  	<div className="input-group-append">
											    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Other Address</button>
											    <div className="dropdown-menu">
											      <a className="dropdown-item" href="#">234235234</a>
											      <a className="dropdown-item" href="#">2343453453</a>
											      <a className="dropdown-item" href="#">234234234234</a>
											    </div>
											  </div>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Name" name="name"/>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Swift Code" name="swift"/>
										</div>
										<div className="form-group">
										    <div className="form-group">
											    <select className="form-control">
											      <option>Country</option>
											      <option>United States</option>
											      <option>India</option>
											      <option>Japan</option>
											      <option>Korea</option>
											      <option>China</option>
											    </select>
											</div>
										</div>
										<div className="form-group">
										    <div className="form-check">
										      	<input className="form-check-input" type="checkbox" id="recipient-ltc"/>
										      	<label className="form-check-label" for="recipient-ltc">
										        Add To recipient
										      	</label>
										    </div>
										</div>
										<a href="" className="crypt-button-red-full">Initiate Withdraw</a>
							  		</form>
								</div>
							  	<div className="tab-pane fade" id="v-pills-litecoin-history" role="tabpanel" aria-labelledby="v-pills-litecoin-history-tab">
							  		<table className="table table-striped">
									  	<thead>
										    <tr>
										      <th scope="col">Time</th>
										      <th scope="col">Amount</th>
										      <th scope="col">Currency</th>
										    </tr>
									  	</thead>
									  	<tbody>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td className="crypt-down">0.000056</td>
										      <td>BTC</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000564</td>
										      <td>ETH</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000234</td>
										      <td>XHO</td>
										    </tr>
									  	</tbody>
									</table>
							  	</div>
							  	<div className="tab-pane fade" id="v-pills-litecoin-buysell" role="tabpanel" aria-labelledby="v-pills-litecoin-buysell-tab">
							  		<div className="crypt-boxed-area">
										<h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
										<div className="row no-gutters">
											<div className="col-md-12">
												<div className="crypt-buy-sell-form">
													<p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
													<div className="crypt-buy">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-up">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div className="menu-green">
															<a href="" className="crypt-button-green-full">Buy</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<div className="crypt-buy-sell-form">
													<p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
													<div className="crypt-sell">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-down">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div>
															<a href="" className="crypt-button-red-full">Sell</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  	</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="crypt-dash-withdraw mt-3 d-none" id="xrp">
					<div className="crypt-withdraw-heading">
						<div className="row">
							<div className="col-md-3">
								<p><b>1 XRP</b></p>
								<p className="crypt-up"><b>$0.306974 USD (0.17%)</b></p>
							</div>
							<div className="col-md-5">
								<i className="pe-7s-lock icon-big"></i> 
								<p><b>Locked: $ 10.00</b></p>
							</div>
							<div className="col-md-4">
								<p><b>Total:</b></p>
								<p className="crypt-up"><b> $ 435,634,234.00</b></p>
							</div>
						</div>
					</div>
					<div className="crypt-withdraw-body bg-white">
						<div className="row">
							<div className="col-md-3">
							<div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
								<a 
									className="nav-link active" 
									id="v-pills-xrp-deposit-tab" 
									data-toggle="pill" 
									href="#v-pills-xrp-deposit" 
									role="tab" 
									aria-controls="v-pills-xrp-deposit" 
									aria-selected="true">
										<i className="pe-7s-bottom-arrow"></i> Deposit
								</a>

								<a 
									className="nav-link" 
									id="v-pills-xrp-withdrawl-tab" 
									data-toggle="pill"
									href="#v-pills-xrp-withdrawl" 
									role="tab" 
									aria-controls="v-pills-xrp-withdrawl" 
									aria-selected="false">
										<i className="pe-7s-up-arrow"></i> Withdraw
								</a>

								<a 
									className="nav-link" 
									id="v-pills-xrp-history-tab" 
									data-toggle="pill" 
									href="#v-pills-xrp-history" 
									role="tab" 
									aria-controls="v-pills-xrp-history" 
									aria-selected="false">
										<i className="pe-7s-clock"></i> History
								</a>

								<a 
									className="nav-link" 
									id="v-pills-xrp-buysell-tab" 
									data-toggle="pill" 
									href="#v-pills-xrp-buysell" 
									role="tab" 
									aria-controls="v-pills-xrp-buysell" 
									aria-selected="false">
										<i className="pe-7s-refresh-2"></i> Buy / Sell
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content" id="v-pills-xrp-tabContent">
							  	<div className="tab-pane fade show active" id="v-pills-xrp-deposit" role="tabpanel" aria-labelledby="v-pills-xrp-deposit-tab">
							  		<h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
							  		<p>Details - <a href="" className="crypt-up">Get VIP Now</a></p>
							  		<form className="deposit-form">
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-xrp-amount" id="payment-xrp-amount1" className="payment-xrp-amount"/>
								  			<label for="payment-xrp-amount1">$ 30000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-xrp-amount" id="payment-xrp-amount2" className="payment-xrp-amount"/><label for="payment-xrp-amount2">$ 20000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-xrp-amount" id="payment-xrp-amount3" className="payment-xrp-amount"/><label for="payment-xrp-amount3">$ 10000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-xrp-amount" id="payment-xrp-amount4" className="payment-xrp-amount"/><label for="payment-xrp-amount4">$ 5000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-xrp-amount" id="payment-xrp-amount5" className="payment-xrp-amount"/><label for="payment-xrp-amount5">$ 2000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-xrp-amount" id="payment-xrp-amount6" className="payment-xrp-amount"/><label for="payment-xrp-amount6">$ 1000 </label>
								  			<div className="check"></div>
						  				</div>
						  				<div className="form-group mt-2">
										    <select className="crypt-image-select" required>
										      	<option value="">Choose A Payment Option</option>
										      	<option value="1">Visa</option>
										      	<option value="2">Master Card</option>
										      	<option value="3">AMEX</option>
										    </select>
										</div>
										<div className="input-group input-text-select mb-3">
										  	<div className="input-group-prepend">
										    	<input placeholder="Amount" type="text" className="form-control crypt-input-lg"/>
										  	</div>
										  	<select className="custom-select" name="inputGroupSelect01">
										    	<option value="1">USD</option>
										    	<option value="2">GBP</option>
										    	<option value="3">EUR</option>
										  	</select>
										</div>
										<div className="text-center crypt-up mt-5 mb-5">
											<p>You will approximately pay</p>
											<h3>$500</h3>
										</div>
										<a href="" className="crypt-button-red-full">Proceed To Payment</a>
							  		</form>
							  	</div>
								<div className="tab-pane fade" id="v-pills-xrp-withdrawl" role="tabpanel" aria-labelledby="v-pills-xrp-withdrawl-tab">
									<h4 className="crypt-down">Wire bank transfer</h4>
							  		<p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
							  		<form>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Amount" className="form-control" name="amount"/>
										  	<div className="input-group-append">
										    	<span className="input-group-text">USD</span>
										  	</div>
										</div>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account"/>
										  	<div className="input-group-append">
											    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Other Address</button>
											    <div className="dropdown-menu">
											      <a className="dropdown-item" href="#">234235234</a>
											      <a className="dropdown-item" href="#">2343453453</a>
											      <a className="dropdown-item" href="#">234234234234</a>
											    </div>
											  </div>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Name" name="name"/>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Swift Code" name="swift"/>
										</div>
										<div className="form-group">
										    <div className="form-group">
											    <select className="form-control">
											      <option>Country</option>
											      <option>United States</option>
											      <option>India</option>
											      <option>Japan</option>
											      <option>Korea</option>
											      <option>China</option>
											    </select>
											</div>
										</div>
										<div className="form-group">
										    <div className="form-check">
										      	<input className="form-check-input" type="checkbox" id="recipient-xrp"/>
										      	<label className="form-check-label" for="recipient-xrp">
										        Add To recipient
										      	</label>
										    </div>
										</div>
										<a href="" className="crypt-button-red-full">Initiate Withdraw</a>
							  		</form>
								</div>
							  	<div className="tab-pane fade" id="v-pills-xrp-history" role="tabpanel" aria-labelledby="v-pills-xrp-history-tab">
							  		<table className="table table-striped">
									  	<thead>
										    <tr>
										      <th scope="col">Time</th>
										      <th scope="col">Amount</th>
										      <th scope="col">Currency</th>
										    </tr>
									  	</thead>
									  	<tbody>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td className="crypt-down">0.000056</td>
										      <td>BTC</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000564</td>
										      <td>ETH</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000234</td>
										      <td>XHO</td>
										    </tr>
									  	</tbody>
									</table>
							  	</div>
							  	<div className="tab-pane fade" id="v-pills-xrp-buysell" role="tabpanel" aria-labelledby="v-pills-xrp-buysell-tab">
							  		<div className="crypt-boxed-area">
										<h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
										<div className="row no-gutters">
											<div className="col-md-12">
												<div className="crypt-buy-sell-form">
													<p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
													<div className="crypt-buy">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-up">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div className="menu-green">
															<a href="" className="crypt-button-green-full">Buy</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<div className="crypt-buy-sell-form">
													<p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
													<div className="crypt-sell">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-down">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div>
															<a href="" className="crypt-button-red-full">Sell</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  	</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="crypt-dash-withdraw mt-3 d-none" id="monero">
					<div className="crypt-withdraw-heading">
						<div className="row">
							<div className="col-md-3">
								<p><b>1 Monero</b></p>
								<p className="crypt-down"><b>$43.12 USD (-0.79%)</b></p>
							</div>
							<div className="col-md-5">
								<i className="pe-7s-lock icon-big"></i> 
								<p><b>Locked: $ 10.00</b></p>
							</div>
							<div className="col-md-4">
								<p><b>Total:</b></p>
								<p className="crypt-up"><b> $ 435,634,234.00</b></p>
							</div>
						</div>
					</div>
					<div className="crypt-withdraw-body bg-white">
						<div className="row">
							<div className="col-md-3">
							<div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
								<a 
									className="nav-link active" 
									id="v-pills-monero-deposit-tab" 
									data-toggle="pill" 
									href="#v-pills-monero-deposit" 
									role="tab" 
									aria-controls="v-pills-monero-deposit" 
									aria-selected="true">
										<i className="pe-7s-bottom-arrow"></i> Deposit
								</a>

								<a 
									className="nav-link" 
									id="v-pills-monero-withdrawl-tab" 
									data-toggle="pill"
									href="#v-pills-monero-withdrawl" 
									role="tab" 
									aria-controls="v-pills-monero-withdrawl" 
									aria-selected="false">
										<i className="pe-7s-up-arrow"></i> Withdraw
								</a>

								<a 
									className="nav-link" 
									id="v-pills-monero-history-tab" 
									data-toggle="pill" 
									href="#v-pills-monero-history" 
									role="tab" 
									aria-controls="v-pills-monero-history" 
									aria-selected="false">
										<i className="pe-7s-clock"></i> History
								</a>

								<a 
									className="nav-link" 
									id="v-pills-monero-buysell-tab" 
									data-toggle="pill" 
									href="#v-pills-monero-buysell" 
									role="tab" 
									aria-controls="v-pills-monero-buysell" 
									aria-selected="false">
										<i className="pe-7s-refresh-2"></i> Buy / Sell
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content" id="v-pills-monero-tabContent">
							  	<div className="tab-pane fade show active" id="v-pills-monero-deposit" role="tabpanel" aria-labelledby="v-pills-monero-deposit-tab">
							  		<h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
							  		<p>Details - <a href="" className="crypt-up">Get VIP Now</a></p>
							  		<form className="deposit-form">
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-monero-amount" id="payment-monero-amount1" className="payment-monero-amount"/>
								  			<label for="payment-monero-amount1">$ 30000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-monero-amount" id="payment-monero-amount2" className="payment-monero-amount"/><label for="payment-monero-amount2">$ 20000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-monero-amount" id="payment-monero-amount3" className="payment-monero-amount"/><label for="payment-monero-amount3">$ 10000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-monero-amount" id="payment-monero-amount4" className="payment-monero-amount"/><label for="payment-monero-amount4">$ 5000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-monero-amount" id="payment-monero-amount5" className="payment-monero-amount"/><label for="payment-monero-amount5">$ 2000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-monero-amount" id="payment-monero-amount6" className="payment-monero-amount"/><label for="payment-monero-amount6">$ 1000 </label>
								  			<div className="check"></div>
						  				</div>
						  				<div className="form-group mt-2">
										    <select className="crypt-image-select" required>
										      	<option value="">Choose A Payment Option</option>
										      	<option value="1">Visa</option>
										      	<option value="2">Master Card</option>
										      	<option value="3">AMEX</option>
										    </select>
										</div>
										<div className="input-group input-text-select mb-3">
										  	<div className="input-group-prepend">
										    	<input placeholder="Amount" type="text" className="form-control crypt-input-lg"/>
										  	</div>
										  	<select className="custom-select" name="inputGroupSelect01">
										    	<option value="1">USD</option>
										    	<option value="2">GBP</option>
										    	<option value="3">EUR</option>
										  	</select>
										</div>
										<div className="text-center crypt-up mt-5 mb-5">
											<p>You will approximately pay</p>
											<h3>$500</h3>
										</div>
										<a href="" className="crypt-button-red-full">Proceed To Payment</a>
							  		</form>
							  	</div>
								<div className="tab-pane fade" id="v-pills-monero-withdrawl" role="tabpanel" aria-labelledby="v-pills-monero-withdrawl-tab">
									<h4 className="crypt-down">Wire bank transfer</h4>
							  		<p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
							  		<form>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Amount" className="form-control" name="amount"/>
										  	<div className="input-group-append">
										    	<span className="input-group-text">USD</span>
										  	</div>
										</div>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account"/>
										  	<div className="input-group-append">
											    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Other Address</button>
											    <div className="dropdown-menu">
											      <a className="dropdown-item" href="#">234235234</a>
											      <a className="dropdown-item" href="#">2343453453</a>
											      <a className="dropdown-item" href="#">234234234234</a>
											    </div>
											  </div>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Name" name="name"/>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Swift Code" name="swift"/>
										</div>
										<div className="form-group">
										    <div className="form-group">
											    <select className="form-control">
											      <option>Country</option>
											      <option>United States</option>
											      <option>India</option>
											      <option>Japan</option>
											      <option>Korea</option>
											      <option>China</option>
											    </select>
											</div>
										</div>
										<div className="form-group">
										    <div className="form-check">
										      	<input className="form-check-input" type="checkbox" id="recipient-monero"/>
										      	<label className="form-check-label" for="recipient-monero">
										        Add To recipient
										      	</label>
										    </div>
										</div>
										<a href="" className="crypt-button-red-full">Initiate Withdraw</a>
							  		</form>
								</div>
							  	<div className="tab-pane fade" id="v-pills-monero-history" role="tabpanel" aria-labelledby="v-pills-monero-history-tab">
							  		<table className="table table-striped">
									  	<thead>
										    <tr>
										      <th scope="col">Time</th>
										      <th scope="col">Amount</th>
										      <th scope="col">Currency</th>
										    </tr>
									  	</thead>
									  	<tbody>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td className="crypt-down">0.000056</td>
										      <td>BTC</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000564</td>
										      <td>ETH</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000234</td>
										      <td>XHO</td>
										    </tr>
									  	</tbody>
									</table>
							  	</div>
							  	<div className="tab-pane fade" id="v-pills-monero-buysell" role="tabpanel" aria-labelledby="v-pills-monero-buysell-tab">
							  		<div className="crypt-boxed-area">
										<h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
										<div className="row no-gutters">
											<div className="col-md-12">
												<div className="crypt-buy-sell-form">
													<p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
													<div className="crypt-buy">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-up">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div className="menu-green">
															<a href="" className="crypt-button-green-full">Buy</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<div className="crypt-buy-sell-form">
													<p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
													<div className="crypt-sell">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-down">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div>
															<a href="" className="crypt-button-red-full">Sell</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  	</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="crypt-dash-withdraw mt-3 d-none" id="zilliqua">
					<div className="crypt-withdraw-heading">
						<div className="row">
							<div className="col-md-3">
								<p><b>1 Zilliqua</b></p>
								<p className="crypt-up"><b>$0.018092 USD (0.29%)</b></p>
							</div>
							<div className="col-md-5">
								<i className="pe-7s-lock icon-big"></i> 
								<p><b>Locked: $ 0.00</b></p>
							</div>
							<div className="col-md-4">
								<p><b>Total:</b></p>
								<p className="crypt-up"><b> $ 23454.00</b></p>
							</div>
						</div>
					</div>
					<div className="crypt-withdraw-body bg-white">
						<div className="row">
							<div className="col-md-3">
							<div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
								<a 
									className="nav-link active" 
									id="v-pills-deposit-tab" 
									data-toggle="pill" 
									href="#v-pills-deposit" 
									role="tab" 
									aria-controls="v-pills-deposit" 
									aria-selected="true">
										<i className="pe-7s-bottom-arrow"></i> Deposit
								</a>

								<a 
									className="nav-link" 
									id="v-pills-withdrawl-tab" 
									data-toggle="pill"
									href="#v-pills-withdrawl" 
									role="tab" 
									aria-controls="v-pills-withdrawl" 
									aria-selected="false">
										<i className="pe-7s-up-arrow"></i> Withdraw
								</a>

								<a 
									className="nav-link" 
									id="v-pills-history-tab" 
									data-toggle="pill" 
									href="#v-pills-history" 
									role="tab" 
									aria-controls="v-pills-history" 
									aria-selected="false">
										<i className="pe-7s-clock"></i> History
								</a>

								<a 
									className="nav-link" 
									id="v-pills-buysell-tab" 
									data-toggle="pill" 
									href="#v-pills-buysell" 
									role="tab" 
									aria-controls="v-pills-buysell" 
									aria-selected="false">
										<i className="pe-7s-refresh-2"></i> Buy / Sell
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content" id="v-pills-tabContent">
							  	<div className="tab-pane fade show active" id="v-pills-deposit" role="tabpanel" aria-labelledby="v-pills-deposit-tab">
							  		<h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
							  		<p>Details - <a href="" className="crypt-up">Get VIP Now</a></p>
							  		<form className="deposit-form">
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-zil-amount" id="payment-zil-amount1" className="payment-zil-amount"/>
								  			<label for="payment-zil-amount1">$ 30000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-zil-amount" id="payment-zil-amount2" className="payment-zil-amount"/><label for="payment-zil-amount2">$ 20000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-zil-amount" id="payment-zil-amount3" className="payment-zil-amount"/><label for="payment-zil-amount3">$ 10000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-zil-amount" id="payment-zil-amount4" className="payment-zil-amount"/><label for="payment-zil-amount4">$ 5000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-zil-amount" id="payment-zil-amount5" className="payment-zil-amount"/><label for="payment-zil-amount5">$ 2000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-zil-amount" id="payment-zil-amount6" className="payment-zil-amount"/><label for="payment-zil-amount6">$ 1000 </label>
								  			<div className="check"></div>
						  				</div>
						  				<div className="form-group mt-2">
										    <select className="crypt-image-select" required>
										      	<option value="">Choose A Payment Option</option>
										      	<option value="1">Visa</option>
										      	<option value="2">Master Card</option>
										      	<option value="3">AMEX</option>
										    </select>
										</div>
										<div className="input-group input-text-select mb-3">
										  	<div className="input-group-prepend">
										    	<input placeholder="Amount" type="text" className="form-control crypt-input-lg"/>
										  	</div>
										  	<select className="custom-select" name="inputGroupSelect01">
										    	<option value="1">USD</option>
										    	<option value="2">GBP</option>
										    	<option value="3">EUR</option>
										  	</select>
										</div>
										<div className="text-center crypt-up mt-5 mb-5">
											<p>You will approximately pay</p>
											<h3>$500</h3>
										</div>
										<a href="" className="crypt-button-red-full">Proceed To Payment</a>
							  		</form>
							  	</div>
								<div className="tab-pane fade" id="v-pills-withdrawl" role="tabpanel" aria-labelledby="v-pills-withdrawl-tab">
									<h4 className="crypt-down">Wire bank transfer</h4>
							  		<p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
							  		<form>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Amount" className="form-control" name="amount"/>
										  	<div className="input-group-append">
										    	<span className="input-group-text">USD</span>
										  	</div>
										</div>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account"/>
										  	<div className="input-group-append">
											    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Other Address</button>
											    <div className="dropdown-menu">
											      <a className="dropdown-item" href="#">234235234</a>
											      <a className="dropdown-item" href="#">2343453453</a>
											      <a className="dropdown-item" href="#">234234234234</a>
											    </div>
											  </div>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Name" name="name"/>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Swift Code" name="swift"/>
										</div>
										<div className="form-group">
										    <div className="form-group">
											    <select className="form-control">
											      <option>Country</option>
											      <option>United States</option>
											      <option>India</option>
											      <option>Japan</option>
											      <option>Korea</option>
											      <option>China</option>
											    </select>
											</div>
										</div>
										<div className="form-group">
										    <div className="form-check">
										      	<input className="form-check-input" type="checkbox" id="recipient-zil"/>
										      	<label className="form-check-label" for="recipient-zil">
										        Add To recipient
										      	</label>
										    </div>
										</div>
										<a href="" className="crypt-button-red-full">Initiate Withdraw</a>
							  		</form>
								</div>
							  	<div className="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-history-tab">
							  		<table className="table table-striped">
									  	<thead>
										    <tr>
										      <th scope="col">Time</th>
										      <th scope="col">Amount</th>
										      <th scope="col">Currency</th>
										    </tr>
									  	</thead>
									  	<tbody>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td className="crypt-down">0.000056</td>
										      <td>BTC</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000564</td>
										      <td>ETH</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000234</td>
										      <td>XHO</td>
										    </tr>
									  	</tbody>
									</table>
							  	</div>
							  	<div className="tab-pane fade" id="v-pills-buysell" role="tabpanel" aria-labelledby="v-pills-buysell-tab">
							  		<div className="crypt-boxed-area">
										<h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
										<div className="row no-gutters">
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
													<div className="crypt-buy">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-up">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div className="menu-green">
															<a href="" className="crypt-button-green-full">Buy</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
													<div className="crypt-sell">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-down">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div>
															<a href="" className="crypt-button-red-full">Sell</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  	</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="crypt-dash-withdraw mt-3 d-none" id="dash">
					<div className="crypt-withdraw-heading">
						<div className="row">
							<div className="col-md-3">
								<p><b>1 Dash</b></p>
								<p className="crypt-up"><b>$67.35 USD (0.30%)</b></p>
							</div>
							<div className="col-md-5">
								<i className="pe-7s-lock icon-big"></i> 
								<p><b>Locked: $ 0.00</b></p>
							</div>
							<div className="col-md-4">
								<p><b>Total:</b></p>
								<p className="crypt-up"><b> $ 23454.00</b></p>
							</div>
						</div>
					</div>
					<div className="crypt-withdraw-body bg-white">
						<div className="row">
							<div className="col-md-3">
							<div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
								<a 
									className="nav-link active" 
									id="v-pills-dash-deposit-tab" 
									data-toggle="pill" 
									href="#v-pills-dash-deposit" 
									role="tab" 
									aria-controls="v-pills-dash-deposit" 
									aria-selected="true">
										<i className="pe-7s-bottom-arrow"></i> Deposit
								</a>

								<a 
									className="nav-link" 
									id="v-pills-dash-withdrawl-tab" 
									data-toggle="pill"
									href="#v-pills-dash-withdrawl" 
									role="tab" 
									aria-controls="v-pills-dash-withdrawl" 
									aria-selected="false">
										<i className="pe-7s-up-arrow"></i> Withdraw
								</a>

								<a 
									className="nav-link" 
									id="v-pills-dash-history-tab" 
									data-toggle="pill" 
									href="#v-pills-dash-history" 
									role="tab" 
									aria-controls="v-pills-dash-history" 
									aria-selected="false">
										<i className="pe-7s-clock"></i> History
								</a>

								<a 
									className="nav-link" 
									id="v-pills-dash-buysell-tab" 
									data-toggle="pill" 
									href="#v-pills-dash-buysell" 
									role="tab" 
									aria-controls="v-pills-dash-buysell" 
									aria-selected="false">
										<i className="pe-7s-refresh-2"></i> Buy / Sell
								</a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content" id="v-pills-dash-tabContent">
							  	<div className="tab-pane fade show active" id="v-pills-dash-deposit" role="tabpanel" aria-labelledby="v-pills-dash-deposit-tab">
							  		<h6 className="text-uppercase">REMAINING TO VIP $3000</h6>
							  		<p>Details - <a href="" className="crypt-up">Get VIP Now</a></p>
							  		<form className="deposit-form">
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-dash-amount" id="payment-dash-amount1" className="payment-dash-amount"/>
								  			<label for="payment-dash-amount1">$ 30000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
								  			<input type="radio" name="payment-dash-amount" id="payment-dash-amount2" className="payment-dash-amount"/><label for="payment-dash-amount2">$ 20000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
							  			</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-dash-amount" id="payment-dash-amount3" className="payment-dash-amount"/><label for="payment-dash-amount3">$ 10000 <img src="images/vip.svg" width="40" alt=""/></label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-dash-amount" id="payment-dash-amount4" className="payment-dash-amount"/><label for="payment-dash-amount4">$ 5000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-dash-amount" id="payment-dash-amount5" className="payment-dash-amount"/><label for="payment-dash-amount5">$ 2000 </label>
								  			<div className="check"></div>
						  				</div>
							  			<div className="crypt-radio-boxed">
							  				<input type="radio" name="payment-dash-amount" id="payment-dash-amount6" className="payment-dash-amount"/><label for="payment-dash-amount6">$ 1000 </label>
								  			<div className="check"></div>
						  				</div>
						  				<div className="form-group mt-2">
										    <select className="crypt-image-select" required>
										      	<option value="">Choose A Payment Option</option>
										      	<option value="1">Visa</option>
										      	<option value="2">Master Card</option>
										      	<option value="3">AMEX</option>
										    </select>
										</div>
										<div className="input-group input-text-select mb-3">
										  	<div className="input-group-prepend">
										    	<input placeholder="Amount" type="text" className="form-control crypt-input-lg" aria-label=""/>
										  	</div>
										  	<select className="custom-select" name="inputGroupSelect01">
										    	<option value="1">USD</option>
										    	<option value="2">GBP</option>
										    	<option value="3">EUR</option>
										  	</select>
										</div>
										<div className="text-center crypt-up mt-5 mb-5">
											<p>You will approximately pay</p>
											<h3>$500</h3>
										</div>
										<a href="" className="crypt-button-red-full">Proceed To Payment</a>
							  		</form>
							  	</div>
								<div className="tab-pane fade" id="v-pills-dash-withdrawl" role="tabpanel" aria-labelledby="v-pills-dash-withdrawl-tab">
									<h4 className="crypt-down">Wire bank transfer</h4>
							  		<p><i className="pe-7s-info"></i> Standard bank transfer will be made up to 2 workdays</p>
							  		<form>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Amount" className="form-control" name="amount"/>
										  	<div className="input-group-append">
										    	<span className="input-group-text">USD</span>
										  	</div>
										</div>
							  			<div className="input-group mb-3">
										  	<input type="text" placeholder="Bank Account Number" className="form-control" name="bank-account"/>
										  	<div className="input-group-append">
											    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Other Address</button>
											    <div className="dropdown-menu">
											      <a className="dropdown-item" href="#">234235234</a>
											      <a className="dropdown-item" href="#">2343453453</a>
											      <a className="dropdown-item" href="#">234234234234</a>
											    </div>
											  </div>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Name" name="name"/>
										</div>
										<div className="form-group">
										    <input type="text" className="form-control" placeholder="Swift Code" name="swift"/>
										</div>
										<div className="form-group">
										    <div className="form-group">
											    <select className="form-control">
											      <option>Country</option>
											      <option>United States</option>
											      <option>India</option>
											      <option>Japan</option>
											      <option>Korea</option>
											      <option>China</option>
											    </select>
											</div>
										</div>
										<div className="form-group">
										    <div className="form-check">
										      	<input className="form-check-input" type="checkbox" id="recipient-dash"/>
										      	<label className="form-check-label" for="recipient-dash">
										        Add To recipient
										      	</label>
										    </div>
										</div>
										<a href="" className="crypt-button-red-full">Initiate Withdraw</a>
							  		</form>
								</div>
							  	<div className="tab-pane fade" id="v-pills-dash-history" role="tabpanel" aria-labelledby="v-pills-dash-history-tab">
							  		<table className="table table-striped">
									  	<thead>
										    <tr>
										      <th scope="col">Time</th>
										      <th scope="col">Amount</th>
										      <th scope="col">Currency</th>
										    </tr>
									  	</thead>
									  	<tbody>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td className="crypt-down">0.000056</td>
										      <td>BTC</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000564</td>
										      <td>ETH</td>
										    </tr>
										    <tr>
										      <th scope="row">22:35:59</th>
										      <td>0.0000234</td>
										      <td>XHO</td>
										    </tr>
									  	</tbody>
									</table>
							  	</div>
							  	<div className="tab-pane fade" id="v-pills-dash-buysell" role="tabpanel" aria-labelledby="v-pills-dash-buysell-tab">
							  		<div className="crypt-boxed-area">
										<h6 className="crypt-bg-head"><b className="crypt-up">BUY</b> / <b className="crypt-down">SELL</b></h6>
										<div className="row no-gutters">
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Buy <span className="crypt-up">BTC</span> <span className="fright">Available: <b className="crypt-up">20 BTC</b></span></p>
													<div className="crypt-buy">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-up">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div className="menu-green">
															<a href="" className="crypt-button-green-full">Buy</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-xxl-6">
												<div className="crypt-buy-sell-form">
													<p>Sell <span className="crypt-down">BTC</span> <span className="fright">Available: <b className="crypt-down">20 BTC</b></span></p>
													<div className="crypt-sell">
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Price</span>
														  	</div>
														  	<input type="text" className="form-control" placeholder="0.02323476" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Amount</span>
														  	</div>
														  	<input type="number" className="form-control"/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div className="input-group mb-3">
														  	<div className="input-group-prepend">
														    	<span className="input-group-text">Total</span>
														  	</div>
														  	<input type="text" className="form-control" readOnly/>
														  	<div className="input-group-append">
														   	 	<span className="input-group-text">BTC</span>
														  	</div>
														</div>
														<div>
															<p>Fee: <span className="fright">100%x0.2 = 0.02</span></p>
														</div>
														<div className="text-center mt-5 mb-5 crypt-down">
															<p>You will approximately pay</p>
															<h4>0.09834 BTC</h4>
														</div>
														<div>
															<a href="" className="crypt-button-red-full">Sell</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  	</div>
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
export default WithdrawlHome;