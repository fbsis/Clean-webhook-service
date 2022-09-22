import { IWebHookCommandRepository } from '@/domain/protocols'
import { iwebHook } from '@/domain/protocols/iwebHook'
import { WebHookId } from '@/domain/valueObjects'
import { DatabaseService } from '@/infra/repository'

export class WebhookCommandRepository implements IWebHookCommandRepository {
  async create (webhook: iwebHook): Promise<void> {
    const database = new DatabaseService()
    await database.create(webhook.toJson())
  }

  async update (webhook: iwebHook): Promise<void> {
    const database = new DatabaseService()
    await database.update(webhook.toJson())
  }

  async delete (id: WebHookId): Promise<void> {
    const database = new DatabaseService()
    await database.delete(id.toString())
  }
}
