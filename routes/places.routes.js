const router = require('express').Router();
const fileUploader = require('../config/cloudinary.config')

const Place = require('../models/Place.model')
const Review = require('../models/Review.model');

const { isLoggedIn, isExpert} = require('../middlewares');
const { isAdmin } = require('../utils')


// Create New Place form (render)
router.get('/create', isLoggedIn, isExpert, (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/new-places', { places }))
        .catch(err => console.error(err))
})

// Create New Place form (handler)
router.post('/create', isExpert, fileUploader.single('imageFile'), (req, res, next) => {

    const { name, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    console.log(req.file.path)
    Place
        .create({ name, location, images: [req.file.path], level: '5', material: '', access: '', parking: false, type: 'Rocodromo' })
        .then(place => res.redirect(`/places/${place.id}`))
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
        .then(placesList => res.render('places/places-list', { placesList, isAdmin: isAdmin(req.session.currentUser) }))
        .catch(err => console.log(err))
})


// Places Detail
router.get('/:id',isLoggedIn, (req, res, next) => {

    const { id } = req.params
    const placePromise = Place.findById(id)
    const reviewsPromise = Review.find({ place: id })
   
    Promise.all([placePromise, reviewsPromise])
        .then(([place, reviews])  => {
            console.log(place)                   
            res.render('places/place-details', { place, reviews, isAdmin: isAdmin(req.session.currentUser) })
        })   
    
})




// Place for edit (render)
router.get('/:id/edit', isLoggedIn, isExpert,(req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(placeToEdit => res.render('places/edit-places', placeToEdit))
        .catch(err => console.log(err))
})


// // Route for edit (handler)
// router.post('/:id/edit', isLoggedIn, isExpert,fileUploader.single('imageFile'),(req, res, next) => {
//     const { id } = req.params
//     const { name, lat, lng, level, material, access, parking, type } = req.body
    
    
//     const location = {
//         type: 'Point',
//         coordinates: [lat, lng]
//     }
//     Place
//         .findByIdAndUpdate(id, { name, location, images: [req.file.path], level, material, access, parking, type }, { new: true })
//         .then((elm) => { 
//             res.redirect('/places')
//             console.log(elm)    
//     } )
//         .catch(err => console.log(err))
// })

// Route for edit (handler)
router.post('/:id/edit', isLoggedIn, isExpert, fileUploader.single('imageFile'), (req, res, next) => {
    const { id } = req.params
    const { name, lat, lng, level, material, access, parking, type } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }   


    Place
        .findByIdAndUpdate(id, { name, location, images: [req.file.path], level, material, access, parking, type }, { new: true })
        .then((elm) => {
            res.redirect('/places')
            console.log(elm)
        })
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