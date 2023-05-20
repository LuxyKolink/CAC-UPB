import mongoose from 'mongoose';

const CountryModel = mongoose.model('country', new mongoose.Schema({
    id: Number,
    name: String,
    id_company: Number

}));

export default CountryModel;