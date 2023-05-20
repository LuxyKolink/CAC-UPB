import {
    Request,
    Response,
    // Appointment,
    // WebAppViewPort,
    AppointmentViewWebAppPort,
    AppointmentWebAppAdapterPort,
    // AppointmentViewEntity

} from './appointments-web-app-view.dependency'

export default class AppointmentWebAppView implements AppointmentViewWebAppPort {
    title = 'CAC-UPB Appointment'
    constructor (
        private readonly appointmentWebAppAdapter: AppointmentWebAppAdapterPort
    ) { }

    appointments = async (_req: Request, res: Response): Promise<void> => {

        const _appointments = await this.appointmentWebAppAdapter.getAppointments()
        const appointments = _appointments.map((app)=>{
            var fechaActual = new Date();
            let isExpired: boolean;
            if (fechaActual.getTime() > app.date.getTime()) {
                isExpired = true;
            } else {
                isExpired = false;
            }
            return {
                _id: app.id,
                id_client: app.id_client,
                description: app.description,
                id_type: app.id_type,
                date: app.date,
                time: app.time,
                name: app.name,
                id_service_point: app.id_service_point,
                status: app.status,
                isExpired
            }
        });
        res.render('appointments', {title: this.title, appointments})
    }
}