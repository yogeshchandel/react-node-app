var admin = require('firebase-admin');
var serviceAccount = require('../config/fbServiceAccountKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://ecommerce-65ddc.firebaseio.com',
});

module.exports = admin;
