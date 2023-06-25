const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    userId: {
        type: String,
    },
    ca: [String],
    
    architect: {
        type: Array,
    },
    lawyer: {
        type: Array,
    }
});



module.exports = mongoose.model('booking', bookingSchema);

