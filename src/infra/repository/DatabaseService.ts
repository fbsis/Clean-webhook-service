
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { EnvAdapter } from '@/infra/configs/envs'
import { WebhookSchema } from '@/infra/repository'
import { InfraException } from '../exception'

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

  constructor (
  ) {
    console.log(EnvAdapter.databaseSettings)
  }

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
      .catch((error) => console.log(error))
    return AppDataSource
  }

  async Create (query: any): Promise<any> {
    try {
      delete query.id
      const datasource = await this.connection()
      const dataRepository = datasource.getRepository(WebhookSchema)
      const saved = await dataRepository.insert(query)
      return saved
    } catch (error) {
      throw new InfraException('DatabaseServiceErrorCreateException', error)
    }
  }
}
