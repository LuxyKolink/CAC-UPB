export default interface AppointmentRepositoryMongoEntity {
    id: number
    id_client: number
    name: string
    description: string
    id_type: string
    date: Date
    time: string
    id_service_point: number
    status: string
    ticket: string
    id_bank: number
    id_company: number
}