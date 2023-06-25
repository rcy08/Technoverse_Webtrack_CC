const User = require('../models/User');
const Booking = require('../models/Booking');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

const handleError = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    if(err.message === 'Please fill all fields') {
        errors.password = err.message;
        return errors;
    }

    if(err.message === 'Email not registered') {
        errors.email = err.message;
        return errors;
    }

    if(err.message === 'Incorrect Password') {
        errors.password = err.message;
        return errors;
    }
    
    if(err.code === 11000) {
        errors.email = 'Email already registered';
        return errors;
    }

    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
}

const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });

        const booking = await Booking.create({ 
            userId: user._id,
            bookings: {
                ca: [],
                architect: [],
                lawyer: []
            }
        });

        res.status(201).json({ user: user._id });

    }
    catch (err) {
        const errors = handleError(err);
        res.status(400).json({ errors });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);

        res.status(201).json({ user: user._id, token });
    }
    catch (err) {
        const errors = handleError(err);
        res.status(400).json({ errors });
    }
}

const forgotpassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({ error: 'User does not exist' });
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

        const message = `
          <h1> You requested a password reset </h1>
          <p> Please go to this link to reset your password </p>
          <a href=${resetUrl} clicktracking=off> ${resetUrl} </a>
        `
        try {
            await sendEmail({
                to: user.email,
                subject: 'Password Reset Request',
                text: message
            });

            res.status(200).json({ success: true, data: 'Email Sent'  });

        } catch (error) {
            console.log(error);

            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return res.status(500).json({ error : 'Email could not be sent' });
        }
    }
    catch (error) {

    }
}

const resetpassword = async (req, res) => {

    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex');

    try {

        const user = await User.findOne({
          resetPasswordToken,
          resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
          return res.status(400).json({ error: 'Invalid reset token' });
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(201).json({
          success: true,
          data: 'Password Reset Success',
          token: createToken(user._id)
        });

    } catch (error) {
        console.log(error);
    }
}

const getuserdetails = async (req, res) => {
    
    const user = req.user;

    res.status(200).json({
        success: true,
        email: user.email,
        id: user._id
    });
}

const getbookings = async(req, res) => {
    
    const { id, type } = req.params;

    const user = await Booking.findOne({ userId: id });

    // const arr = user[type];
    const { serviceName } = req.body;

    // arr.forEach(element => {
    //     if(element == serviceName){
    //         return res.status(400).json({ error: `Can't book a service more than once!` });
    //     }
    // });

    user[type].push(serviceName);

    await user.save();

    res.status(201).json({ success: true, data: 'Service booked' });
    
}

module.exports = {
    signup,
    login,
    forgotpassword,
    resetpassword,
    getuserdetails,
    getbookings
}