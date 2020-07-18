const express = require('express');
const router = express.Router();
const subscriberService = require('./subscriber.service');
const errorHandler = require('../error-handler/error-handler');

router.post('/search', search);
router.post('/create', create);

module.exports = router;

function search(req, res, next) {
  subscriberService.findMatch(req.body)
    .then(subscribers => subscribers ? res.json(subscribers) : res.sendStatus(404))
    .catch(err => next(err));
}

function create(req, res, next) {
  subscriberService.createSubscriber(req.body)
    .then(subscriber => subscriber ?  res.json(subscriber) : res.sendStatus(404))
    .catch(err => next(err));
}
