import Appointment from '../../../domain/appointment.domain';
import Client from "../../../domain/client.domain";
import AppointmentAppModelPort from './appointment-app-model.port';
import { AppointmentRepositoryMongoAdapterPort } from '../client/client-app-model.dependency';
import { ClientRepositoryMongoAdapterPort } from '../../../repository/adapter/mongo/client/client-mongo-adapter.dependency';

export {
    Appointment,
    Client,
    AppointmentAppModelPort,
    AppointmentRepositoryMongoAdapterPort,
    ClientRepositoryMongoAdapterPort
}