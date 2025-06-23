import mongoose ,{ Schema} from 'mongoose';

const DataModel = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    }
}, { timestamps: true });

const DataModelSchema = mongoose.model('DataModel', DataModel);
export default DataModelSchema
