const router = require('express').Router();
const Review = require('../models/Review.model');
const { isLoggedIn } = require('../middlewares')

router.post('/new-comment/:id', isLoggedIn, (req, res, next) => {
      const { id: place } = req.params
      const { username: ownername, owner: id } = req.session.currentUser
      const { comment } = req.body
      Review
            .create({ place, owner, comment, ownername })
            .then(() => res.redirect(`/places/${id}`))
            .catch(error => next(error))
})

module.exports = router