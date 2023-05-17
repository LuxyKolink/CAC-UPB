import mongoose from 'mongoose';

const BankModel = mongoose.model('bank', new mongoose.Schema({
    id: Number,
    id_service_point: Number,
    id_company: Number
}));

export default BankModel;