const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
      title:{
        type: String,
        required: [true, 'A column title is required'],
        trim: true
      },
      position: {
        type: Number,
        required: true
      }
}, {timestamps: true});