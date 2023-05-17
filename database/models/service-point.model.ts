import mongoose from 'mongoose';

const ServicePointModel = mongoose.model('servicePoint', new mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    id_municipality: Number,
    id_company: Number
}));

export default ServicePointModel;