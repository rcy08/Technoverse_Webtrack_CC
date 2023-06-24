const express = require('express');
const {
    signup,
    login,
    forgotpassword,
    resetpassword,
    getuserdetails,
    getservices
} = require('../controllers/userController');

const { auth } = require('../middleware/auth');

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/forgot-password', forgotpassword);

router.put('/reset-password/:resetToken', resetpassword);

router.get('/account-details', auth, getuserdetails);

router.get('/services', getservices);

module.exports = router;

