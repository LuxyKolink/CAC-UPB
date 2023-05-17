import mongoose from 'mongoose';

const DepartmentModel = mongoose.model('department', new mongoose.Schema({
    id: Number,
    name: String,
    id_country: Number,
    id_company: Number
}));

export default DepartmentModel;
