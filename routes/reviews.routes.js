const router = require('express').Router();
const User = require('../models/User.model')
const Place = require('../models/Place.model')
const Review = require('../models/Review.model');
const { redirect } = require('express/lib/response');
const { isLoggedIn } = require('../middlewares')

router.post('/new-comment/:id', isLoggedIn, (req, res, next) => {
      const { id: place } = req.params
      const { username: ownername, owner: id } = req.session.currentUser
      const { comment } = req.body

      console.log(place, owner, comment, ownername)
      Review
            .create({ place, owner, comment, ownername })
            .then(() => res.redirect(`/places/${id}`))
            .catch(error => next(error))



})

// 620afbb493437a3a180714c5


module.exports = router