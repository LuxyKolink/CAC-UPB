import {
    Request,
    Response,
    CancelViewWebAppPort

} from './cancel-web-app-view.dependency'

export default class CancelWebAppView implements CancelViewWebAppPort {
    title = 'CAC-UPB Appointment'

    cancel (_req: Request, res: Response): void {
        res.render('cancel', {title: this.title})
    }

}