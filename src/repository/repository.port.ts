export default interface RepositoryPort<T> {
    getById: (id: number) => T | null
    getAll: () => T[] | []
    save: (entity: T) => T | null
    update: (entity: T) => T | null
    delete: (id: string) => boolean
  }