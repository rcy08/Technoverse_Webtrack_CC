const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    userId: {
        type: String,
    },

    ca: [String],

    architect: [String],
    
    lawyer: [String]
});



module.exports = mongoose.model('booking', bookingSchema);

