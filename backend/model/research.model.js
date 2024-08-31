import mongoose from 'mongoose';

const researchSchema = new mongoose.Schema({
    ResearchId: {
        type: String,
        required: true
    },
    title:{
        type:String,
        required: true,
    },
    journal: {
        type: String,
        required: true,
    },
    FacultyId: {
        type: mongoose.Schema.Types.ObjectId,
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
    },
    keywords:{
        type:[String],
    }
})
module.exports = mongoose.model('Research', researchSchema);