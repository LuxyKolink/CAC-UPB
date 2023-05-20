import {
    Request,
    Response,
    ConfirmViewWebAppPort

} from './confirm-web-app-view.dependency'

export default class ConfirmWebAppView implements ConfirmViewWebAppPort {
    title = 'CAC-UPB Appointment'

    confirm (_req: Request, res: Response): void {
        res.render('confirm', {title: this.title})
    }

}