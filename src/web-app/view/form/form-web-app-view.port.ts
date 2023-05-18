import { Request, Response, WebAppViewPort } from './form-web-app-view.dependency'

export default interface FormViewWebAppPort extends WebAppViewPort {
  form: (req: Request, res: Response) => void
  form_submit: (req: Request, res: Response) => void
}