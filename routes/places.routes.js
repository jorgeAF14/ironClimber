const router = require('express').Router();

const Place = require('../models/Place.model')

// Create New Place form (render)
router.get('/create', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('../views/places/new-places', { places }))
        .catch(err => console.error(err))
})

// Create New Place form (handler)
router.post('/create', (req, res, next) => {

    const { name, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, location, image: [], level: '5', material: '', access: '', parking: false, type: 'Rocodromo' })
        .then(() => res.redirect('/places/'))
        .catch(err => {
            res.render('../views/places/new-places')
            console.error(err)
        })
})


// Places List
router.get('/', (req, res, next) => {
    Place
        .find()
        .select('name')
        .then(placesList => res.render('../views/places/places-list', { placesList }))
        .catch(err => console.log(err))
})


// Places Detail
router.get('/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(placeDetail => res.render('../views/places/places-details', placeDetail))
        .catch(err => console.log(err))
})


// Place for edit (render)
router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(placeToEdit => res.render('../views/places/edit-places', placeToEdit))
        .catch(err => console.log(err))
})


// Route for edit (handler)
router.post('/:id/edit', (req, res, next) => {

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
router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

module.exports = router;