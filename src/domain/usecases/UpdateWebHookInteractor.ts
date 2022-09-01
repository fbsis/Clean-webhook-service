import { IWebHookCommandRepository } from '@/domain/protocols'
import { WebHook } from '../entities'

export class UpdateWebHookInteractor {
  constructor (
    private readonly webhookCommandRepo: IWebHookCommandRepository
  ) {}

  async execute (webhook: WebHook): Promise<void> {
    await this.webhookCommandRepo.update(webhook)
  }
}
