import { DatabaseSettings } from '@/infra/repository'

export class EnvAdapter {
  static readonly server = {
    stage: process.env.NODE_ENV ?? 'development',
    name: process.env.SERVICE_NAME ?? 'logService'
  }

  static readonly http = {
    listenPort: Number(process.env.PORT ?? 3000)
  }

  static readonly databaseSettings: DatabaseSettings = {
    authentication: {
      type: process.env.DATABASE_TYPE ?? 'mysql',
      host: process.env.DATABASE_TYPE ?? 'localhost',
      port: 3306,
      username: process.env.DATABASE_TYPE ?? 'root',
      password: process.env.DATABASE_TYPE ?? 'asdasd',
      database: process.env.DATABASE_TYPE ?? 'webhook'
    }
  }

  static readonly staffProxies = process.env.STAFF_PROXIES ?? ['::1']
}
