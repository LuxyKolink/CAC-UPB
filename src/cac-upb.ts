// import MongoDb from '../database/mongo.db'
import dotenv  from 'dotenv';
import path from 'path'

// Router

import { ErrorViewWebAppPort, IndexViewWebAppPort, WebAppRouterPort, AppointmentViewWebAppPort, CancelViewWebAppPort, ConfirmViewWebAppPort, FormViewWebAppPort } from "./web-app/router/web-app-router.dependency";
import WebAppRouter from "./web-app/router/web-app.router";

dotenv.config({
    path: path.join(__dirname, '../config/.env.development')
  })

// view

import ErrorWebAppView from "./web-app/view/error/error-web-app.view";
import IndexWebAppView from "./web-app/view/index/index-web-app-view";
import AppointmentWebAppView from './web-app/view/appointments/appointments-web-app-view';
import CancelWebAppView from './web-app/view/cancel/cancel-web-app-view';
import ConfirmWebAppView from './web-app/view/confirm/confirm-web-app-view';
import FormWebAppView from './web-app/view/form/form-web-app-view';
import WebApp from "./web-app/web-app";


// const db = new MongoDb()
// db.connect()
const indexWebAppView: IndexViewWebAppPort = new IndexWebAppView()
const errorWebAppView: ErrorViewWebAppPort = new ErrorWebAppView()
const appointmentWebAppView: AppointmentViewWebAppPort = new AppointmentWebAppView()
const cancelWebAppView: CancelViewWebAppPort = new CancelWebAppView()
const confirmWebAppView: ConfirmViewWebAppPort = new ConfirmWebAppView()
const formWebAppView: FormViewWebAppPort = new FormWebAppView()
const router: WebAppRouterPort = new WebAppRouter(indexWebAppView, errorWebAppView, appointmentWebAppView, cancelWebAppView, confirmWebAppView, formWebAppView)
const appointments: WebApp = new WebApp(router)
appointments.start()