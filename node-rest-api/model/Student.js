const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
  name: {
    type: String
  },
  college: {
    type: String
  },
  description: {
    type: String
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', Student)