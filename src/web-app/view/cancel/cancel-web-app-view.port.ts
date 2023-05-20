import { Request, Response, WebAppViewPort } from './cancel-web-app-view.dependency'

export default interface CancelViewWebAppPort extends WebAppViewPort {
  cancel: (req: Request, res: Response) => void
}