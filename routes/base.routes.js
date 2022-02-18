const router = require("express").Router();


router.get("/", (req, res, next) => {
    console.log('req.app.locals : ', req.app.locals)
    res.render("index")
})

module.exports = router;