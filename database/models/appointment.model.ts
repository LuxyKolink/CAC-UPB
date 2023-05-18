import mongoose from 'mongoose';

const AppointmentModel = mongoose.model('appointment', new mongoose.Schema({
    _id: Number,
    id_client: Number,
    description: String,
    id_type: Number,
    date: Date,
    time: String,
    name: String,
    id_service_point: Number,
    status: String,
    ticket: String,
    id_bank: Number,
    id_company: Number
}));

export default AppointmentModel;