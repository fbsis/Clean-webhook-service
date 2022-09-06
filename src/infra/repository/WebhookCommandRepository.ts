import { IwebHook, IWebHookCommandRepository } from '@/domain/protocols'
import { WebHookId } from '@/domain/valueObjects'
import { DatabaseService } from '@/infra/repository'

export class WebhookCommandRepository implements IWebHookCommandRepository {
  async create (webhook: IwebHook): Promise<void> {
    const database = new DatabaseService()
    await database.create(webhook.toJson())
  }

  async update (webhook: IwebHook): Promise<void> {
    const database = new DatabaseService()
    await database.update(webhook.toJson())
  }

  async delete (id: WebHookId): Promise<void> {
    const database = new DatabaseService()
    await database.delete(id.toString())
  }
}
