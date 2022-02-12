const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        name: String,
        description: String,
        location: {
            lat: Number,
            lng: Number
        },
        level: {
            type: String,
            enum: ['5', '5+', '6a', '6a+', '6b', '6b+', '6c', '6c+', '7a', '7a+', '7b', '7b+', '7c', '7c+', '8a', '8a+', '8b', '8b+', '8c', '8c+', '9a', '9a+', '9b', '9b+', '9c']
        },
        material: String,
        placeAccess: String,
        parking: Boolean,
        typePlace: {
            type: String,
            enum: ['Rocodromo', 'Clasica', 'Deportiva']
        },
        // reviews: -- por escalar mas adelante
    },
    {
        timestamps: true,
    }
);

// placeSchema.index({ location: '2dsphere'})

const Place = model("Places", placeSchema);

module.exports = Place;
