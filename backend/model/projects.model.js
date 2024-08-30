import mongoose from 'mongoose';

const researchSchema = new mongoose.Schema({
    ResearchId: {
        type: String,
        required: true
    },
    FacultyId: {
        type: Mongoose.Schema.types.objectId,
        required: true,
        ref: 'User'
    },
    PublicationDate: { 
        type: Date,
        required: true,

    },
    JournalConferenceName: { 
        type: String, 
        
    },
    body: { 
        type: String
    },
    approved: {
        type: boolean,
        enum: ['declined', 'processing', 'approved'],
        default: 'processing'
    }
})
module.exports = mongoose.model('Research', researchSchema);