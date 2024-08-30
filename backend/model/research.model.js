import { DefaultLogger } from 'drizzle-orm';
import { boolean } from 'drizzle-orm/mysql-core';
import mongoose from 'mongoose';

const projectSchema = new mongoose.model({
    title: { 
        type: String,
         required: true 
    },
    description: { 
        type: String,
        required: true
    },
    FacultyId: {
        type: Mongoose.Schema.types.objectId,
        required: true,
        ref: 'User'
    },
    link: { 
        type: String
    },
    approved: {
        type: boolean,
        enum: ['declined', 'processing', 'approved'],
        default: 'processing'
    }
})

module.exports = mongoose.model('Project', projectSchema)