const mongoose = require("mongoose");

const ProfileScema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user"
	},
	company: {
		type: String
	},
	location: {
		type: String
	}
	status: {
		type: String
	}
	skills: {
		type: [String]
	}
	bio: {
		type: String
	}
	githubusername: {
		type: String
	},
	experience: [
		{
			title: {
				type: String,
				required: true
			},
			company: {
				type: String,
				required: true
			},
			location: {
				type: String,
				required: true
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date
			}
		}
	]
});