import { IWebHookCommandRepository } from '@/domain/protocols'
import { WebHookId } from '../valueObjects'

export class DeleteWebHookInteractor {
  constructor (
    private readonly webhookCommandRepo: IWebHookCommandRepository
  ) {}

  async execute (id: WebHookId): Promise<void> {
    await this.webhookCommandRepo.delete(id)
  }
}
