import {
    Request,
    Response,
    IndexViewWebAppPort

} from './index-web-app-view.dependency'

export default class IndexWebAppView implements IndexViewWebAppPort {
    title = 'CAC-UPB Appointment'

    index (_req: Request, res: Response): void {
        res.render('index', {title: this.title})
    }

}