import 'reflect-metadata'

import {
  Entity, PrimaryGeneratedColumn,
  Column,
  Index
} from 'typeorm'
import { EnvAdapter } from '../configs/envs'

@Entity(EnvAdapter.databaseSettings.authentication.database)
export class WebhookSchema {
  @PrimaryGeneratedColumn()
  id: number

  @Column('bigint')
  @Index()
  institutionId: string

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
  timeout: string

  @Column('boolean')
  status: string
}
