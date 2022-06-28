const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    startAt :{
        type:Date,
    },
    endAt: {
        type:Date
        
    },
    createdAt: {
        type:Date
        
    },
    updatedAt: {
        type:Date
        
    }
})

const Formation = mongoose.model('Formation', formationSchema);

module.exports = Formation;