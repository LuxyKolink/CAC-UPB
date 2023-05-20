import mongoose from 'mongoose';

const AppointmentModel = mongoose.model('appointment', new mongoose.Schema({
    id_client: Number,
    description: String,
    id_type: String,
    date: Date,
    time: String,
    name: String,
    id_service_point: String,
    status: String,
    ticket: String,
    id_bank: Number,
    id_company: Number
}));

export default AppointmentModel;