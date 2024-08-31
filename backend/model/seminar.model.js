import mongoose, { model } from 'mongoose';
const SeminarSchema = new mongoose.model({
    seminarId:{
        type:String,
        required:true,
    },
    title: { 
        type: String, 
        required: true 
    },
    track:{
        type:String,
        required:true,
    },
    objective: { 
        type: String,
         required: true 
    },
    description:{
        type:String,
    },
    FacultyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    approved: {
        type: String,
        enum: ['declined', 'processing', 'approved'],
        default: 'processing'
    },
    date:{
        type:Date,
        required:true
    },
    link:{
        type:String,
    }
})

module.exports = mongoose.model('seminars', SeminarSchema);