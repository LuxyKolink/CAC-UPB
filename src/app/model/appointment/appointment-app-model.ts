import { AppointmentRepositoryMongoAdapterPort, AppointmentAppModelPort, Appointment } from './appointment-app-model.dependency'

export default class AppointmentAppModel implements AppointmentAppModelPort {
    constructor (
        private readonly appointmentRepositoryMongoAdapter: AppointmentRepositoryMongoAdapterPort<Appointment>) { }
    
    getAppointments = async (): Promise <Appointment[]> => {
        return await this.appointmentRepositoryMongoAdapter.getAll()
    }

    getAppointmentById = async (_id: number): Promise <Appointment | null> => {
        return this.appointmentRepositoryMongoAdapter.getById(_id)
    }

    save = async (entity: Appointment): Promise<Appointment> => {
        return this.appointmentRepositoryMongoAdapter.save(entity)
    }

    delete = async (_id: number): Promise<boolean> => {
        return this.appointmentRepositoryMongoAdapter.delete(_id)
    }
}