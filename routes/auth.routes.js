const router = require('express').Router();

/* GET home page */
router.get('/signup', (req, res, next) => res.send("AQUI VA EL FORMULARIO DE REGISTRO"))

router.post('/signup', (req, res, next) => {
    //debe incluirse un middleware para logearse
    res.send("FORMULARIO ENVIADO")
})

router.get('/login', (req, res, next) => res.send("ingresar usuario y contraseña"))

router.post('/login', (req, res, next) => res.send("ingresado usuario y contraseña"))

router.post('/logout', (req, res, next) => res.redirect("/"))

module.exports = router;