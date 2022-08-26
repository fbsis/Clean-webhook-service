import { WebHook } from '@/domain/entities'
import { IWebHookCommandRepository } from '@/domain/protocols'
import { DatabaseService } from '@/infra/repository'

export class WebhookCommandRepository implements IWebHookCommandRepository {
  async create (webhook: WebHook): Promise<void> {
    const database = new DatabaseService()
    await database.Create(webhook.toJson())
  }
}
