export interface AppointmentViewEntity {
    id: number
    id_client: number
    description: string
    id_type: number
    date: Date
    time: string
    id_service_point: number
    status: 'Pending' | 'Completed' | 'Expired'
    ticket: string
    id_bank: number
    id_company: number
}