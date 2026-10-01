const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'A task title is strictly required'],
        trim: true
    },
    description:{
        type: String,
        default:''
    },
    listId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    },
    position:{
         type: Number,
         required: true
    },

},  {timestamps: true});


module.exports = mongoose.model('Card', CardSchema);