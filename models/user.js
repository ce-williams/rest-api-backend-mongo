const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    startDate : {
        type: Date,
        required: true,
        default: Date.now
        
    },
    endDate : {
        type: Date,
        required: true,
        default: Date.now
    
    }
})


module.exports = mongoose.model('User', userSchema);