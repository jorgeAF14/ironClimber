const router = require('express').Router();
const User = require('../models/User.model')
const {isAdmin}=require('../utils')
const { isLoggedIn, isAdminM} = require('../middlewares')

router.get('/search', isLoggedIn, (req, res, next) => res.render('user/search-user'))
router.post('/search', (req, res, next) =>{

    const { email } = req.body
    User
        .findOne({email})
        .then(use=> res.redirect(`/user/${use.id}/details`))
        .catch(error => next(error)) 
})
router.get('/:id/details', isLoggedIn, (req, res, next) => {
    const { id } = req.params
    User
        .findById(id)
        .then(user => res.render('user/details',{user,isAdmin: isAdmin(req.session.currentUser)}))
        .catch(error => next(error))    
})

router.get('/:id/edit',(req, res, next) => {
    const { id } = req.params
    User
        .findById(id)
        .then(user=>res.render('user/edit-user',user))
        .catch(error => next(error))
   
})
router.post('/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { username, email, biography, level, climbType} = req.body
    User
        .findByIdAndUpdate(id, { username, email, biography, level, climbType })
        .then(user => res.redirect(`/user/${user.id}/details`))
        .catch(error => next(error))
})

router.post('/:id/delete', isLoggedIn, (req, res, next) => {
    const { id } = req.params
    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router