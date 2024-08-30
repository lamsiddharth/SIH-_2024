const mongoose = require('mongoose');

mongoose.connect("");

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId }, // Assuming _id is a MongoDB ObjectId
  personalDetails: {
    id: { type: String, required: true }, // Assuming id is a string
    name: { type: String, required: true },
    college: { type: String, required: true },
    domain: { type: String },
  },
  research: [
    {
      ResearchID: { type: String, required: true },
      FacultyID: { type: String, required: true },
      PublicationDate: { type: Date, required: true },
      JournalConferenceName: { type: String, required: true },
      body: { type: String },
    },
  ],
  projects: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      link: { type: String },
    },
  ],
  seminars: [
    {
      title: { type: String, required: true },
      objective: { type: String, required: true },
      role: { type: String, enum: ['attendee', 'organizer'] },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);