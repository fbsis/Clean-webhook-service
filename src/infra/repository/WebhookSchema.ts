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

  @Column('number')
  @Index()
  institutionId: string

  @Column('text')
  @Index()
  action: string

  @Column('text')
  name: string

  @Column('text')
  method: string

  @Column('text')
  url: string

  @Column('text')
  secret: string

  @Column('number')
  timeout: string

  @Column('boolean')
  status: string
}
