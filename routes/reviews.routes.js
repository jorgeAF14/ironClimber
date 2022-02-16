const router = require('express').Router();
const User = require('../models/User.model')
const Place = require('../models/Place.model')
const Review = require('../models/Review.model');
const { redirect } = require('express/lib/response');
const { isLoggedIn } = require('../middlewares')

router.post('/new-comment/:id', isLoggedIn, (req, res, next)=>{
      const {id} = req.params
      const  owner  = req.session.currentUser.id
      const {comment} = req.body
      const place = id
       console.log(place, owner, comment)
      Review
         .create({place,owner,comment})
         .then(() => res.redirect(`/places/${id}`))
         .catch(error => next(error))
    

    
})

// 620afbb493437a3a180714c5


module.exports = router