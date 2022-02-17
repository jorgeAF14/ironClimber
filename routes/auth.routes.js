const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { isLoggedIn } = require('../middlewares');
const { findOne } = require('../models/User.model');
const User = require('../models/User.model')
const saltRounds = 10


router.get('/signup', (req, res, next) => res.render('auth/sign-up-form'))
router.post('/signup', (req, res, next) => {
    
    const { password } = req.body
    bcrypt
        .genSalt(saltRounds)
        .then(salt =>bcrypt.hash(password,salt))
        .then(hashedPassword => User.create({ ...req.body, password: hashedPassword, 
            level: '5', biography: '', picturesActivities: [], climbType:'',role:'climber'}))
        .then(createdUser => res.redirect('/'))
        .catch(error => next(error))    
})

router.get('/login', (req, res, next) => res.render('auth/log-in'))

router.post('/login', (req, res, next) => {
    const {email, password} = req.body

    User
       .findOne({email})
       .then(user =>{
           
           if(!user){
               res.render('auth/log-in', { errorMessage: 'Email no registrado en la Base de Datos'})
               return
           }else if (bcrypt.compareSync(password,user.password)===false){
               res.render('auth/log-in', { errorMessage: 'La contraseña es incorrecta' })
               return
           } else{
               req.session.currentUser = user
               res.redirect(`/user/${user.id}/details`)
           }
       })
       .catch(error => next(error))
})


router.get('/profile',isLoggedIn,(req, res, next) => {
    const id = req.session.currentUser._id
    res.redirect(`/user/${id}/details`)
})

router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect("/"))
    })

module.exports = router