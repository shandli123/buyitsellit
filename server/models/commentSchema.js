let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema({
	//primary key _id
	username: String, // person who comments
	text: String, 		// comment content
	itemID: String,   // product id
	itemName: String, // product name
	owner: String,    // owner of the productt
	timestamp: Date
});

let Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;

