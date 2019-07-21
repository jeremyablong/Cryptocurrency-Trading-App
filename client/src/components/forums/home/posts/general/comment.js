import React, { Component } from 'react';

class GeneralPost extends Component {
	render() {
		return (
			<div>	
				<div className="container"> 
					<div className="row">
						<div className="col-md-2">
							<a class="pull-left" href="#">
					    		<img class="media-object" src="http://placekitten.com/150/150"/>
					  		</a>
						</div>
							<div class="col-md-10">
						    	<h1>Alice in Wonderland, part dos</h1>
							    <p>'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words:
							    'Yes, we went to school in the sea, though you mayn't believe it—'
							    'I never said I didn't!' interrupted Alice.
							    ' did,' said the Mock Turtle.</p>
						    	<div>
						        	<span class="badge badge-success">Posted 2012-08-02 20:47:04</span><div class="pull-right"><span class="label">alice</span> <span class="label">story</span> <span class="label">blog</span> <span class="label">personal</span></div>
						    	</div> 
						    	<hr/>
							</div>
						</div>
					</div>
			</div>
		);
	}
}
export default GeneralPost;