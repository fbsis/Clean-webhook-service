import { WebHook } from '@/domain/entities'
import { IWebHookQueryRepository } from '@/domain/protocols'
import { WebHookId, WebHookInstitutionId, WebHookAction, WebHookName, WebHookMethod, WebHookUrl, WebHookSecret, WebHookTimeout, WebHookStatus } from '@/domain/valueObjects'
import { DatabaseService } from '@/infra/repository'

export class WebhookQueryRepository implements IWebHookQueryRepository {
  async getAll (): Promise<WebHook[]> {
    const database = new DatabaseService()
    const webhookData: any[] = await database.getAll()

    return webhookData.map(webhook => new WebHook(
      new WebHookId(webhook.id),
      new WebHookInstitutionId(webhook.institutionId),
      new WebHookAction(webhook.action),
      new WebHookName(webhook.name),
      new WebHookMethod(webhook.method),
      new WebHookUrl(webhook.url),
      new WebHookSecret(webhook.secret),
      new WebHookTimeout(webhook.timeout),
      new WebHookStatus(webhook.status)
    ))
  }
}
