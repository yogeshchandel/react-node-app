const { text } = require('body-parser');
const mongoose = require('mongoose');
const { subscribe } = require('../routes/auth');
const userSchema = new mongoose.Schema(
	{
		name: String,
		email: {
			type: String,
			requiued: true,
			index: true,
		},
		role: {
			type: String,
			default: 'subscriber',
		},
		cart: {
			type: Array,
			default: [],
		},
		address: String,
		//wishlist: [{ type: ObjectId, ref: 'Product' }],
	},
	{ timestamps: true }
);
module.exports = mongoose.model('User', userSchema);
