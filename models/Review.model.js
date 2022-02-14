const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
    {
        comment: String,
        place: {
            type: Schema.Types.ObjectId,
            ref: 'Place'
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    {
        timestamps: true,
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;