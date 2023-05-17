export default interface ServiceTypeRepositoryMongoEntity {
    id: number
    name: 'Claims' | 'Returns' | 'Consultations'
    id_company: number
}