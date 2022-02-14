const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    biography: String,
    favoritesPlaces: [{
      type: Schema.Types.ObjectId,
      ref: 'Place'
    }],
    picturesActivities: [String],
    image: String, // URL (cloudinary)
    level: {
      type: String,
      enum: ['5', '5+', '6a', '6a+', '6b', '6b+', '6c', '6c+', '7a', '7a+', '7b', '7b+', '7c', '7c+', '8a', '8a+', '8b', '8b+', '8c', '8c+', '9a', '9a+', '9b', '9b+', '9c']
    },
    climbType: String,
    role:{
      type:String,
      enum:['climber','expert','admin']
    }
  
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
