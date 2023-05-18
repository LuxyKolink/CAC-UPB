import { Appointment } from './appointment-web-app-adapter.dependency'
export default interface AppointmentWebAppAdapterPort {
    getAppointments: () => Promise <Appointment[]>
    getAppointmentById: (_id: number) => Promise <Appointment | null>
    save: (entity: Appointment) => Promise<Appointment>
    delete: (_id: number) => Promise<boolean>
}