export default interface Client {
    id: number
    identification: string
    first_name: string
    second_name: string
    first_last_name: string
    second_last_name: string
    address: string
    phone: string
    type: 'Normal' | 'Premium'
    birth_date: Date
    id_company: number
}