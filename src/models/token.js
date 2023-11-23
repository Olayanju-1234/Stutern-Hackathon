// token model

import { Schema as _Schema } from 'mongoose';
import mongoose from 'mongoose';
const Schema = _Schema;

const tokenSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    }
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;
