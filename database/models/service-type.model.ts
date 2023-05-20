import mongoose from 'mongoose';

const ServiceTypeModel = mongoose.model('serviceType', new mongoose.Schema({
    id: Number,
    name: String,
    id_company: Number
}));

export default ServiceTypeModel;