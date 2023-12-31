const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an Email'],
        unique: true,
        validate: [isEmail, 'Please enter a valid Email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a Password'],
        minlength: [6, 'Minimum length of Password is 6 characters']
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, {timestamps: true});


userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email, password) {
    if(!email || !password) {
        throw Error('Please fill all fields');
    }

    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        else {
            throw Error('Incorrect Password');
        }
    }
    else {
        throw Error('Email not registered');
    }
}

userSchema.methods.getResetPasswordToken = function() {
    
    const resetToken = crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

    return resetToken;
}

module.exports = mongoose.model('user', userSchema);
