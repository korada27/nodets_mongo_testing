//   /lib/models/crmModel.ts

import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;


export var addressSchema = new Schema({
    addressId :{
        type: Number,
        index: true,
        unique: true
    },
    city:{ type: String },
    state:{ type: String },
    _id: false
});

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        required: true,
    },
    company: { type: String },
    phone: { type: Number },
    created_date: {
        type: Date,
        default: Date.now
    },
    address: [addressSchema]
})

