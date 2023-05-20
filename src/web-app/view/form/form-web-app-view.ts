import {
    Request,
    Response,
    FormViewWebAppPort,
    AppointmentWebAppAdapterPort

} from './form-web-app-view.dependency'

export default class FormWebAppView implements FormViewWebAppPort {
    title = 'CAC-UPB Appointment'

    constructor (
        private readonly appointmentWebAppAdapter: AppointmentWebAppAdapterPort
    ) { }

    form (_req: Request, res: Response): void {
        res.render('form', {title: this.title})
    }

    async form_submit (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        console.log('a');

        const save = await this.appointmentWebAppAdapter.save(req.body)
        console.log(save);
        
        
        res.render('confirm', {title: this.title, save})
    }

}