import { Appointment } from "./appointment-app-model.dependency";

export default interface AppointmentAppModelPort {
    getAppointments: () => Promise <Appointment[]>
    getAppointmentById: (_id: number) => Promise <Appointment | null>
}