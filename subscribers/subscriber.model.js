const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: { type: String, required: true},
  secondName: { type: String, required: true },
  phoneNumber: { type: Number, unique: true, required: true },
});

module.exports = mongoose.model('Subscriber', schema);
