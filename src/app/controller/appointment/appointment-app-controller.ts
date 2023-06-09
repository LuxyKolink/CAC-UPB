import { Appointment, AppointmentAppModelPort, AppointmentAppControllerPort } from "./appointment-app-controller.dependency";

export default class AppointmentAppController implements AppointmentAppControllerPort {
    constructor (private readonly appointmentAppModel: AppointmentAppModelPort) { }

    getAppointments = (): Promise <Appointment[]> => {
        return this.appointmentAppModel.getAppointments()
    }

    getAppointmentById = (_id: number): Promise<Appointment | null> => {
        return this.appointmentAppModel.getAppointmentById(_id)
    }

    save = async (entity: Appointment): Promise<Appointment> => {
        return this.appointmentAppModel.save(entity)
    }

    delete = async (_id: number): Promise<boolean> => {
        return this.appointmentAppModel.delete(_id)
    }
}