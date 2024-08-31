import mongoose from 'mongoose';

const projectSchema = new mongoose.model({
    projectID:{
        type:String,
        required:true,
    },
    title: { 
        type: String,
         required: true 
    },
    coverPicLink:{
        type:String,
    },
    description: { 
        type: String,
        required: true
    },
    FacultyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    link: { 
        type: String
    },
    approved: {
        type: String,
        enum: ['declined', 'processing', 'approved'],
        default: 'processing'
    },
    keywords:{
        type:[String],
    }
})

module.exports = mongoose.model('Project', projectSchema)