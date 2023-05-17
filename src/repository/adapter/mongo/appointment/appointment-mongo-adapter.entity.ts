export default interface AppointmentRepositoryMongoEntity {
    id: number
    id_client: number
    description: string
    id_type: number
    date: Date
    time: string
    id_service_point: number
    status: 'Pending' | 'Completed'
    ticket: string
    id_bank: number
    id_company: number
}