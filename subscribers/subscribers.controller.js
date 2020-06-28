const express = require('express');
const router = express.Router();
const subscriberService = require('./subscriber.service');

router.post('/search', search);

module.exports = router;

function search(req, res, next) {
  subscriberService.findMatch(req.body)
    .then(subscribers => res.json(subscribers))
    .catch(err => next(err));
}
