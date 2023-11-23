// user medical details model

import mongoose from 'mongoose';
import { Schema as _Schema } from 'mongoose';
const Schema = _Schema;

const MedicDetailsSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        bloodGroup: {
            type: String,
            required: true,
        },
        chronicDiseases: {
            type: String,
        },
        weight: {
            type: Number,
        },
        height: {
            type: Number,
        },
        allergies: {
            type: String,
        },
        conditions: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const MedicDetails = mongoose.model('MedicDetails', MedicDetailsSchema);

export default MedicDetails;
