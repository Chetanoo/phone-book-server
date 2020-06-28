const db = require('../db/db');
const Subscriber = db.Subscriber;

module.exports = {
  findMatch,
};

async function findMatch(matchParams) {
  const { firstName, secondName } = matchParams;

  if (!firstName && !secondName) {
    return await Subscriber.find()
  }

  return await Subscriber.find({$or:[{firstName: firstName},{secondName: secondName}]});
}
