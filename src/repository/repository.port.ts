export default interface RepositoryPort<T> {
    getById: (_id: number) => Promise<T>
    getAll: () => Promise<T[]>
    save: (entity: T) => Promise<T>
    update: (entity: T, _id: number) => Promise<T>
    delete: (_id: number) => Promise<boolean>
  }