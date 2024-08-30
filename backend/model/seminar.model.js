import mongoose from 'mongoose';
const SeminarSchema = new mongoose.model({
    title: { 
        type: String, 
        required: true 
    },
    FacultyId: {
        type: Mongoose.Schema.types.objectId,
        required: true,
        ref: 'User'
    },
    objective: { 
        type: String,
         required: true 
    },
    role: { 
        type: String,
        enum: ['attendee', 'organizer']
    },
})