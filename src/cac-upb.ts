import MongoDb from '../database/mongo.db'
import dotenv  from 'dotenv';
import path from 'path'

// Controller

import { AppointmentAppControllerPort, AppointmentAppModelPort } from './app/controller/appointment/appointment-app-controller.dependency'
import AppointmentAppController from './app/controller/appointment/appointment-app-controller';

// Model

import { Appointment, AppointmentRepositoryMongoAdapterPort } from './app/model/appointment/appointment-app-model.dependency'
import AppointmentAppModel from './app/model/appointment/appointment-app-model';

// Repository

import AppointmentRepositoryMongoAdapter from './repository/adapter/mongo/appointment/appointment-mongo-adapter';

// web app adapter

import { AppointmentWebAppAdapterPort } from './web-app/adapter/appointment/appointment-web-app-adapter.dependency'
import AppointmentWebAppAdapter from './web-app/adapter/appointment/appointment-web-app-adapter';

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


const db = new MongoDb()
db.connect()

const appointmentRepositoryMongoAdapter: AppointmentRepositoryMongoAdapterPort<Appointment> = new AppointmentRepositoryMongoAdapter()
const appointmentAppModel: AppointmentAppModelPort = new AppointmentAppModel(appointmentRepositoryMongoAdapter)
const appointmentWebAppController: AppointmentAppControllerPort = new AppointmentAppController(appointmentAppModel)
const appointmentWebAppAdapter: AppointmentWebAppAdapterPort = new AppointmentWebAppAdapter(appointmentWebAppController)


const indexWebAppView: IndexViewWebAppPort = new IndexWebAppView()
const errorWebAppView: ErrorViewWebAppPort = new ErrorWebAppView()
const appointmentWebAppView: AppointmentViewWebAppPort = new AppointmentWebAppView(appointmentWebAppAdapter)
const cancelWebAppView: CancelViewWebAppPort = new CancelWebAppView()
const confirmWebAppView: ConfirmViewWebAppPort = new ConfirmWebAppView()
const formWebAppView: FormViewWebAppPort = new FormWebAppView(appointmentWebAppAdapter)
const router: WebAppRouterPort = new WebAppRouter(indexWebAppView, errorWebAppView, appointmentWebAppView, cancelWebAppView, confirmWebAppView, formWebAppView)
const appointments: WebApp = new WebApp(router)
appointments.start()