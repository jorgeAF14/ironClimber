const router = require('express').Router();

const Place = require('../models/Place.model')
const Review = require('../models/Review.model');

const { isLoggedIn, isExpert} = require('../middlewares');
const User = require('../models/User.model');

// Create New Place form (render)
router.get('/create', isLoggedIn, isExpert, (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/new-places', { places }))
        .catch(err => console.error(err))
})

// Create New Place form (handler)
router.post('/create', isExpert,(req, res, next) => {

    const { name, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, location, image: [], level: '5', material: '', access: '', parking: false, type: 'Rocodromo' })
        .then(place => res.redirect(`/places/${place.id}/edit`))
        .catch(err => {
            res.render('places/new-places')
            console.error(err)
        })
})


// Places List
router.get('/', isLoggedIn,(req, res, next) => {
    Place
        .find()
        .select('name')
        .then(placesList => res.render('places/places-list', { placesList }))
        .catch(err => console.log(err))
})


// Places Detail
router.get('/:id',isLoggedIn, (req, res, next) => {

    const { id } = req.params
    const placePromise = Place.findById(id)
    const reviewsPromise = Review.find({ place: id })
    //nueva promesa
    // const userPromise = User.findById(req.session.currentUser)

    Promise.all([placePromise, reviewsPromise])
        .then(data => {
            [place, reviews] = data         
             res.render('places/place-details', { place, reviews })
        })

    // let data = {}

    // // Place
    // //     .findById(id)
    // //     .then(placeDetail => res.render('../views/places/places-details', placeDetail))
    // //     .catch(err => console.log(err))
    //    Place
    //        .findById(id)
    //        .then(placeDetail =>{
    //            data.placeDetail = placeDetail
    //            return Review.find({ place: id })
    //        }) 
    //        .then(allReviews => { 
    //            data.allReviews= {allReviews} //puede ser un problema
    //            res.render('../views/places/places-details', data )
    //         })
    //        .catch(err => console.log(err))
    // Review
    //     .find(place:id)    
})




// Place for edit (render)
router.get('/:id/edit', isLoggedIn, isExpert,(req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(placeToEdit => res.render('places/edit-places', placeToEdit))
        .catch(err => console.log(err))
})


// Route for edit (handler)
router.post('/:id/edit', isLoggedIn, isExpert, (req, res, next) => {

    const { id } = req.params
    const { name, lat, lng, image, level, material, access, parking, type } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .findByIdAndUpdate(id, { name, location, image, level, material, access, parking, type }, { new: true })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})


//delete Places
router.post('/:id/delete', isLoggedIn, isExpert, (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

module.exports = router;