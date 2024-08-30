const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId }, // Assuming _id is a MongoDB ObjectId
  personalDetails: {
    id: { type: String, required: true }, // Assuming id is a string
    name: { type: String, required: true },
    college: { type: String, required: true },
    domain: { type: String },
  },
});



module.exports = mongoose.model('User', userSchema);