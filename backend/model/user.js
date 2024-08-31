const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  personalDetails: {
    facultyid: { type: String, required: true }, // Assuming id is a string
    name: { type: String, required: true },
    phone:{type:String},
    email:{type:String, required:true},
    college: { type: String, required: true },
    domain: { type: String },
    department:{type:String},
    researchInterest:{type : String}
  },
  research:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Research"
  }],
  projects:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }],
  seminars:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "seminars"
  }],
  lectures:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "lectures"
  }],
});



module.exports = mongoose.model('User', userSchema);