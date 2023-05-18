import { Router, WebAppRouterPort, IndexViewWebAppPort, ErrorViewWebAppPort, AppointmentViewWebAppPort, CancelViewWebAppPort, ConfirmViewWebAppPort, FormViewWebAppPort} from './web-app-router.dependency'

export default class WebAppRouter implements WebAppRouterPort {
    router: Router

    constructor (
        private readonly indexViewWebApp: IndexViewWebAppPort,
        private readonly errorViewWebApp: ErrorViewWebAppPort,
        private readonly appointmentViewWebApp: AppointmentViewWebAppPort,
        private readonly cancelViewWebApp: CancelViewWebAppPort,
        private readonly confirmViewWebApp: ConfirmViewWebAppPort,
        private readonly formViewWebApp: FormViewWebAppPort
    ) {
        this.router = Router()
        this.routes()
    }

    routes = (): void => {
        this.router.get('/', this.indexViewWebApp.index.bind(this.indexViewWebApp))
        this.router.get('/', this.errorViewWebApp.error.bind(this.errorViewWebApp))
        this.router.get('/appointments', this.appointmentViewWebApp.appointments.bind(this.appointmentViewWebApp))
        this.router.get('/cancel', this.cancelViewWebApp.cancel.bind(this.cancelViewWebApp))
        
        this.router.get('/confirm', this.confirmViewWebApp.confirm.bind(this.confirmViewWebApp))
        this.router.get('/form', this.formViewWebApp.form.bind(this.formViewWebApp))
        this.router.post('/form', this.formViewWebApp.form_submit.bind(this.formViewWebApp))
    }

}