import { IWebHookQueryRepository } from '@/domain/protocols'
import { WebHook } from '../entities'

export class ReadWebHookInteractor {
  constructor (
    private readonly webhookQueryRepo: IWebHookQueryRepository
  ) {}

  async execute (): Promise<WebHook[]> {
    return await this.webhookQueryRepo.getAll()
  }
}
