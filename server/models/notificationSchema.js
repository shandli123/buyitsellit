let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let notificationSchema = new Schema({
	// _id primary key
	targetUsername: String,
	sourceUsername: String,
	
	productID: String,            
	productName: String,
	seenStatus: Boolean,
	timeStamp: Date,
	
});

let Notification = mongoose.model('notifications', notificationSchema);

module.exports = Notification;




