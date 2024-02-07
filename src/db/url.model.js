import mongoose from 'mongoose';

const URLSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }
},
    {
        versionKey: false,
        timestamps: false,
    }
);
 
const URLModel = mongoose.model('UrlAssignment', URLSchema);
export const deleteurlById = (id) => URLModel.findOneAndDelete({ _id: id });
export default URLModel;