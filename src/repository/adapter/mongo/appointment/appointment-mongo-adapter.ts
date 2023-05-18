import {
    Appointment,
    // AppointmentRepositoryMongoEntity,
    AppointmentRepositoryMongoAdapterPort,
    AppointmentMongo,
} from './appointment-mongo-adapter.dependency'

export default class AppointmentRepositoryMongoAdapter implements AppointmentRepositoryMongoAdapterPort<Appointment> {
    getByClient = async (id_client: number): Promise <Appointment[]> => {
        return new Promise( async (res, rej) => {
            try {
                const appointment = await AppointmentMongo.find({ id_client })
                res(appointment as Appointment[])
              } catch (error) {
                console.error(error)
                rej(error)
              }
        })
        
    }

    getByStatus = async (status: string): Promise <Appointment[]> => {
    return new Promise( async (res, rej) => {
        try {
            const appointment = await AppointmentMongo.find({ status })
            res(appointment as Appointment[])
            } catch (error) {
            console.error(error)
            rej(error)
            }
        })
    
    }

    getById = async (_id: number): Promise <Appointment> => {
        return new Promise( async (res, rej) => {
            try {
                const appointment = await AppointmentMongo.findById( _id )
                res(appointment as Appointment)
                } catch (error) {
                console.error(error)
                rej(error)
                }
        })
        
    }

    getAll = async (): Promise <Appointment[]> => {
        return new Promise( async (res, rej) => {
            try {
                const appointment = await AppointmentMongo.find({ })
                res(appointment as Appointment[])
                } catch (error) {
                console.error(error)
                rej(error)
                }
        })
        
     }

     save = async (appointment: Appointment): Promise <Appointment> => {
        return new Promise( async (res, rej) => {
            try {
                const _appointment = await AppointmentMongo.create({...appointment})
                res(_appointment as Appointment)
                } catch (error) {
                console.error(error)
                rej(error)
                }
        })
        
     }

     update = async (appointment: Appointment, _id: number): Promise <Appointment> => {
        return new Promise( async (res, rej) => {
            try {
                await AppointmentMongo.updateOne({...appointment}, {_id})
                const new_appointment = await AppointmentMongo.findById( _id )
                res(new_appointment as Appointment)
                } catch (error) {
                console.error(error)
                rej(error)
                }
        })
        
     }

     delete = async (_id: number): Promise<boolean> => {
        return new Promise( async (res, rej) => {
            try {
                await AppointmentMongo.deleteOne( {_id} )
                res(true)
                } catch (error) {
                console.error(error)
                rej(error)
                }
        })
        
    }
}