import { Appointment } from './appointment-app-controller.dependency'
export default interface AppointmentAppControllerPort {
    getAppointments: () => Promise <Appointment[]>
    getAppointmentById: (_id: number) => Promise <Appointment | null>
}