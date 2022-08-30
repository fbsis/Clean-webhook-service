import 'reflect-metadata'

import {
  Entity,
  Column,
  Index,
  PrimaryColumn
} from 'typeorm'
import { EnvAdapter } from '../configs/envs'

@Entity(EnvAdapter.databaseSettings.authentication.database)
export class WebhookSchema {
  @Column('varchar')
  @PrimaryColumn()
  @Index()
  id: string

  @Column('tinyint')
  @Index()
  institutionId: number

  @Column('varchar')
  @Index()
  action: string

  @Column('varchar')
  name: string

  @Column('varchar')
  method: string

  @Column('varchar')
  url: string

  @Column('varchar')
  secret: string

  @Column('tinyint')
  timeout: number

  @Column('boolean')
  status: boolean
}
