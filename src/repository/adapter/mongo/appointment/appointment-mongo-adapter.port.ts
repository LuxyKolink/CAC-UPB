import RepositoryPort from '../../../repository.port'

export default interface AppointmentRepositoryMongoAdapterPort<T> extends RepositoryPort<T> {
    getByClient: (id_client: number) => Promise<T[]>
    getByStatus: (status: string) => Promise<T[]>
}
