import mongoose from 'mongoose';

const ClientModel = mongoose.model('client', new mongoose.Schema({
    id: Number,
    identification: String,
    first_name: String,
    second_name: String,
    first_last_name: String,
    second_last_name: String,
    address: String,
    phone: String,
    type: String,
    birth_date: Date,
    id_company: Number
}));

export default ClientModel;