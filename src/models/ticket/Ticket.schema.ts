import mongoose from 'mongoose';

const ticketSchema: mongoose.Schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ticketId: { type: String },
    fullname: { type: String }, 
    email: { type: String },
    status: { type: String, default: 'Open' },
    department: { type: String },
    priority: { type: String },
    subject: { type: String },
    description: { type: String },
    closed: { type: Boolean, default: false },
    created: { type: Date, default: Date.now },
    dueDate: { type: Date }
});

export { ticketSchema };