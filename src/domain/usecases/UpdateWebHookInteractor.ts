import { IwebHook, IWebHookCommandRepository } from '@/domain/protocols'

export class UpdateWebHookInteractor {
  constructor (
    private readonly webhookCommandRepo: IWebHookCommandRepository
  ) {}

  async execute (webhook: IwebHook): Promise<void> {
    await this.webhookCommandRepo.update(webhook)
  }
}
