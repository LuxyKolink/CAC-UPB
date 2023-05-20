import { Router} from 'express'
import WebAppRouterPort from './web-app-router.port'
import IndexViewWebAppPort from '../view/index/index-web-app-view.port'
import ErrorViewWebAppPort from '../view/error/error-web-app-view.port'
import AppointmentViewWebAppPort from '../view/appointments/appointments-web-app-view.port'
import CancelViewWebAppPort from '../view/cancel/cancel-web-app-view.port'
import ConfirmViewWebAppPort from '../view/confirm/confirm-web-app-view.port'
import FormViewWebAppPort from '../view/form/form-web-app-view.port'

export {
    Router,
    WebAppRouterPort,
    IndexViewWebAppPort,
    ErrorViewWebAppPort,
    AppointmentViewWebAppPort,
    CancelViewWebAppPort,
    ConfirmViewWebAppPort,
    FormViewWebAppPort
}