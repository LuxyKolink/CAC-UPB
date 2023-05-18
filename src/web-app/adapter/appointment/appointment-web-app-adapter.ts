import { Appointment, AppointmentAppControllerPort, AppointmentWebAppAdapterPort } from './appointment-web-app-adapter.dependency'

export default class AppointmentWebAppAdapter implements AppointmentWebAppAdapterPort {
    constructor (private readonly appointmentAppController: AppointmentAppControllerPort) { }

    getAppointments = (): Promise<Appointment[]> => {
        return this.appointmentAppController.getAppointments()
    }

    getAppointmentById = (_id: number): Promise<Appointment | null> => {
        return this.appointmentAppController.getAppointmentById(_id)
    }
}