
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { EnvAdapter } from '@/infra/configs/envs'
import { WebhookSchema } from '@/infra/repository'
import { InfraException, InfraNotFoundException } from '../exception'
import crypto from 'crypto'

export type DatabaseSettings = {
  authentication: {
    type: any
    host: string
    port: number
    username: string
    password: string
    database: string
  }
}

export class DatabaseService {
  settings: DatabaseSettings | undefined

  async connection (): Promise<DataSource> {
    const AppDataSource = new DataSource({
      type: EnvAdapter.databaseSettings.authentication.type,
      host: EnvAdapter.databaseSettings.authentication.host,
      port: EnvAdapter.databaseSettings.authentication.port,
      username: EnvAdapter.databaseSettings.authentication.username,
      password: EnvAdapter.databaseSettings.authentication.password,
      database: EnvAdapter.databaseSettings.authentication.database,
      entities: [WebhookSchema],
      synchronize: true,
      logging: true
    })

    await AppDataSource.initialize()
      .catch((error) => {
        throw new InfraException('DatabaseServiceErrorInitializeException', error)
      })
    return AppDataSource
  }

  private hashData (dataToHash: any): string {
    const hash = crypto.createHash('md5').update(JSON.stringify(dataToHash)).digest('hex')
    return hash
  }

  async create (query: any): Promise<any> {
    try {
      query.id = this.hashData(query)
      const datasource = await this.connection()
      const dataRepository = datasource.getRepository(WebhookSchema)
      const saved = await dataRepository.insert(query)
      return saved
    } catch (error) {
      throw new InfraException('DatabaseServiceErrorCreateException', error)
    }
  }

  async getAll (): Promise<object[]> {
    try {
      const datasource = await this.connection()
      const dataRepository = datasource.getRepository(WebhookSchema)
      const returnedData = await dataRepository.find()
      return returnedData
    } catch (error) {
      throw new InfraException('DatabaseServiceErrorGetAllException', error)
    }
  }

  async findOneBy (query: any): Promise<object | null> {
    try {
      const datasource = await this.connection()
      const dataRepository = datasource.getRepository(WebhookSchema)
      const toFind = await dataRepository.findOneBy(query)
      return toFind
    } catch (error) {
      throw new InfraException('DatabaseServiceErrorFindOneByIdException', error)
    }
  }

  async update (domainToUpdate: any): Promise<void> {
    const datasource = await this.connection()
    const dataRepository = datasource.getRepository(WebhookSchema)
    let dataToUpdate = await dataRepository.findOneBy({ id: domainToUpdate.id })
    if (!dataToUpdate) throw new InfraNotFoundException('RegisterNotFound')

    dataToUpdate = { ...domainToUpdate }
    await dataRepository.save(dataToUpdate ?? {}).catch(error => {
      throw new InfraException('DatabaseServiceErrorDeleteException', error)
    })
  }

  async delete (id: any): Promise<void> {
    const datasource = await this.connection()
    const dataRepository = datasource.getRepository(WebhookSchema)
    const findToDelete = await this.findOneBy({ id: id })
    if (!findToDelete) throw new InfraNotFoundException('RegisterNotFound')
    await dataRepository.delete({ id: id }).catch(error => {
      throw new InfraException('DatabaseServiceErrorDeleteException', error)
    })
  }
}
