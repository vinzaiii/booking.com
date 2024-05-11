const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    image: {
      type: String,
     },
     image1: {
      type: String,
     },
     image2: {
      type: String,
     },
     image3: {
      type: String,
     },
     image4: {
      type: String,
     },
     image5: {
      type: String,
     },
     image6: {
      type: String,
     },
     name: {
      type: String,
     },
     place: {
      type: String,
     },
     distance: {
      type: String,
     },
     location: {
      type: String,
     },
     desc: {
      type: String,
     },
     desc1: {
      type: String,
     },
     description: {
      type: String,
     },
     price: {
      type: Number,
     },
     country: {
      type: String,
     },
  },
);

module.exports = mongoose.model("User", userSchema)
