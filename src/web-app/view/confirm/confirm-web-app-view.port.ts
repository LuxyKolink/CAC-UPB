import { Request, Response, WebAppViewPort } from './confirm-web-app-view.dependency'

export default interface ConfirmViewWebAppPort extends WebAppViewPort {
  confirm: (req: Request, res: Response) => void
}