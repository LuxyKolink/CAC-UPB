import mongoose from 'mongoose';

const CityModel = mongoose.model('city', new mongoose.Schema({
    id: Number,
    name: String,
    id_department: Number,
    id_company: Number
}));

export default CityModel;

