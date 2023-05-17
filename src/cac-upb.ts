import MongoDb from '../database/mongo.db'

// Router

import { ErrorWebAppViewPort, IndexWebAppViewPort, WebAppRouterPort } from "./web-app/router/web-app-router.dependency";
import WebAppRouter from "./web-app/router/web-app.router";

// view

import ErrorWebAppView from "./web-app/view/error/error-web-app.view";
import IndexWebAppView from "./web-app/view/index/index-web-app-view";
import WebApp from "./web-app/web-app";


const db = new MongoDb()
db.connect()
const indexWebAppView: IndexWebAppViewPort = new IndexWebAppView()
const errorWebAppView: ErrorWebAppViewPort = new ErrorWebAppView()
const router: WebAppRouterPort = new WebAppRouter(indexWebAppView, errorWebAppView)
const appointments: WebApp = new WebApp(router)
appointments.start()