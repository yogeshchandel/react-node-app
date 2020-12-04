const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const app = express();

// Routes
//const authRoutes = require('./routes/auth');
//const userRoutes = require('./routes/user');
// Database conection
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('DB CONNECTED');
	})
	.catch((error) => {
		console.log(error);
	});

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());
//app.use('/api', authRoutes);
//app.use('/api', userRoutes);

fs.readdirSync('./routes').map((file) => {
	//console.log(`file ${file}`);
	//app.use('/api', './routes/' + file);
	app.use('/api', require(`./routes/${file}`));
});

// Port
const port = process.env.PORT;
app.listen(port, () => console.log(`Server in runing on ${port}`));
