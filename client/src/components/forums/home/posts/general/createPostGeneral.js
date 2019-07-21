import React, { Component } from 'react';
import "./general.css";
import axios from "axios";

class CreatePostGeneral extends Component {
constructor () {
	super();

	this.state = {
		title: "Please enter your title...",
		subTitle: "Please enter your sub title...",
		content: "Please enter your content..."
	}
}
	handleSubmit = (e) => {
		e.preventDefault();
		
		const { title, subTitle, content } = this.state;

		axios.post("/forum/post", {
			title: title,
			subTitle: subTitle,
			body: content
		}).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		})
		console.log("Submitted");
	}
	render() {
		return (
		<div className="box_shadow">
			<div className="container create_post">
			<h1 className="text-center underline">Create A Thread!</h1>
				<div className="col-md-12">
					<form onSubmit={this.handleSubmit}>
					  <div class="form-group">
					    <label htmlFor="title">Title Of The Thread</label>
					    <input onChange={(e) => {
					    	this.setState({
					    		title: e.target.value
					    	})
					    }} class="form-control" id="title" placeholder={this.state.title}/>
					    <small class="form-text text-muted">This will be what is displayed in the preview of the posting.</small>
					  </div>
					  <div class="form-group">
					    <label htmlFor="sub-title">Sub-Title</label>
					    <input onChange={(e) => {
					    	this.setState({
					    		subTitle: e.target.value
					    	})
					    }} type="sub-title" class="form-control" id="sub-title" placeholder={this.state.subTitle}/>
					  </div>
					  <div class="form-group">
					    <label htmlFor="description">Description - Content</label>
					  	<textarea onChange={(e) => {
					    	this.setState({
					    		content: e.target.value
					    	})
					    }} class="form-control" id="content" rows="3" placeholder={this.state.content}></textarea>
					  </div>
					  <button  class="btn btn-primary">Submit Thread</button>
					</form>
				</div>
			</div>
		</div>
		);
	}
}
export default CreatePostGeneral;