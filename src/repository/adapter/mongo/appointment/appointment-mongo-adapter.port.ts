import RepositoryPort from '../../../repository.port'

export default interface AppointmentRepositoryMongoAdapterPort<T> extends RepositoryPort<T> {
    getByClient: (id_client: string) => T[] | []
    getByStatus: (status: string) => T[] | []
}
