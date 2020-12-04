const express = require('express');
const router = express.Router();
const { createAndUpdateUser } = require('../controllers/authController');
const { authcheck } = require('../middlewares/auth');

// middleware

// Route
router.get('/create-or-update-user', createAndUpdateUser);
module.exports = router;
