import { IWebHookCommandRepository } from '@/domain/protocols'
import { iwebHook } from '../protocols/iwebHook'

export class UpdateWebHookInteractor {
  constructor (
    private readonly webhookCommandRepo: IWebHookCommandRepository
  ) {}

  async execute (webhook: iwebHook): Promise<void> {
    await this.webhookCommandRepo.update(webhook)
  }
}
