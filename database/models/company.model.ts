import mongoose from 'mongoose';

const CompanyModel = mongoose.model('company', new mongoose.Schema({
    id: Number,
    name: String
}));

export default CompanyModel;