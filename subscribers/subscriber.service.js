const db = require('../db/db');
const Subscriber = db.Subscriber;

module.exports = {
  findMatch,
  createSubscriber
};

async function findMatch(matchParams) {
  const { firstName, secondName } = matchParams;

  if (!firstName && !secondName) {
    return await Subscriber.find()
  }

  return await Subscriber.find({$or:[{firstName},{secondName}]});
}

async function createSubscriber(subscriberData) {
  const { firstName, secondName, phoneNumber } = subscriberData;
  const subscriber = new Subscriber(subscriberData)

  if (!firstName || !secondName || !phoneNumber) {
    throw 'All fields are required';
  }

  if (await Subscriber.findOne({phoneNumber})) {
    throw 'Subscriber with this phone number already exists';
  }

  await subscriber.save()

  return subscriber
}
