const { Schema, model } = require("mongoose");
const placeSchema = new Schema(
    {
        name: String,
        description: String,
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        images: [String],
        level: {
            type: String,
            enum: ['5', '5+', '6a', '6a+', '6b', '6b+', '6c', '6c+', '7a', '7a+', '7b', '7b+', '7c', '7c+', '8a', '8a+', '8b', '8b+', '8c', '8c+', '9a', '9a+', '9b', '9b+', '9c']
        },
        material: String,
        access: String,
        parking: Boolean,
        type: {
            type: String,
            enum: ['Rocodromo', 'Clasica', 'Deportiva']
        },        
    },
    {
        timestamps: true,
    }
);

const Place = model("Place", placeSchema);

module.exports = Place;
