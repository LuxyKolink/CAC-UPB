import { Request, Response, WebAppViewPort } from './appointments-web-app-view.dependency'

export default interface AppointmentViewWebAppPort extends WebAppViewPort {
    appointments: (req: Request, res: Response) => void
}