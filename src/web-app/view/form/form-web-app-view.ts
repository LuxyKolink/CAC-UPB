import {
    Request,
    Response,
    FormViewWebAppPort

} from './form-web-app-view.dependency'

export default class FormWebAppView implements FormViewWebAppPort {
    title = 'CAC-UPB Appointment'

    form (_req: Request, res: Response): void {
        res.render('form', {title: this.title})
    }

}