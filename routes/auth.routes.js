const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { findOne } = require('../models/User.model');
const User = require('../models/User.model')
const saltRounds = 10

/* GET home page */
router.get('/signup', (req, res, next) => res.render('auth/sign-up-form'))
router.post('/signup', (req, res, next) => {
    //debe incluirse un middleware para logearse
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
           console.log(user)
           console.log(req.session)
           if(!user){
               res.render('auth/log-in', { errorMessage: 'Email no registrado en la Base de Datos'})
               console.log(user)
               return
           }else if (bcrypt.compareSync(password,user.password)===false){
               res.render('auth/login', { errorMessage: 'La contraseña es incorrecta' })
               return
           } else{
               req.session.currentUser = user
               console.log(user)
               res.redirect('/')
           }
       })
       .catch(error => next(error))
})

router.post('/logout', (req, res, next) => res.redirect("/"))

module.exports = router