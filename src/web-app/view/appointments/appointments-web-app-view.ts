import {
    Request,
    Response,
    AppointmentViewWebAppPort

} from './appointments-web-app-view.dependency'

export default class AppointmentWebAppView implements AppointmentViewWebAppPort {
    title = 'CAC-UPB Appointment'

    appointments (_req: Request, res: Response): void {
        res.render('appointments', {title: this.title})
    }
}