const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.mongooseConnectionString, { useNewUrlParser: true });

module.exports = {
  Subscriber: require('../subscribers/subscriber.model'),
};
