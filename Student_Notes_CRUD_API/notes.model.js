const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    name: String,
    email: String,
    title: String,
    description: String,
     createdAt: {
        type: Date,
        default: Date.now(),
      }
});

module.exports = mongoose.model('Notes', notesSchema);