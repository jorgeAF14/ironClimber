const router = require('express').Router();
const { redirect } = require('express/lib/response');

const User = require('../models/User.model')

const {isAdmin}=require('../utils')

router.get('/search', (req, res, next) => res.render('user/search-user'))
router.post('/search', (req, res, next) =>{

    const { email } = req.body
    User
        .findOne({email})
        .then(use=> res.redirect(`/user/${use.id}/details`))
        .catch(error => next(error)) 
})
router.get('/:id/details', (req, res, next) => {
    const { id } = req.params
    User
        .findById(id)
        .then(user => res.render('user/details',{user,isAdmin: isAdmin(req.session.currentUser)}))
        .catch(error => next(error))
    
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params
    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router