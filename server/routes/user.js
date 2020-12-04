const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
	res.status(200).json({ data: 'Hello World!' });
});
module.exports = router;
