import { WebHook } from '@/domain/entities'
import { IWebHookCommandRepository } from '@/domain/protocols'

export class CreateWebHookInteractor {
  constructor (
    private readonly webhookCommand: IWebHookCommandRepository
  ) {}

  async execute (webHook: WebHook): Promise<void> {
    await this.webhookCommand.create(webHook)
  }
}
