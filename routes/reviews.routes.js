const router = require('express').Router();
const Review = require('../models/Review.model');
const { isLoggedIn } = require('../middlewares')

router.post('/new-comment/:id', isLoggedIn, (req, res, next) => {
      const { id } = req.params
      const place = id
      const { username: ownername} = req.session.currentUser
      const owner  = req.session.currentUser.id
      const { comment } = req.body
      Review
            .create({ place, owner, comment, ownername })
            .then(() => res.redirect(`/places/${id}`))
            .catch(error => next(error))
})

module.exports = router