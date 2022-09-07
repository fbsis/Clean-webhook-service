import { WebHook } from '@/domain/entities'
import { IWebHookQueryRepository } from '@/domain/protocols'
import { WebHookId, WebHookInstitutionId, WebHookAction, WebHookName, WebHookMethod, WebHookUrl, WebHookSecret, WebHookTimeout, WebHookStatus } from '@/domain/valueObjects'
import { DatabaseService, HttpService } from '@/infra/repository'
import { InfraNotFoundException } from '../exception'

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

  async action (institutionId: WebHookInstitutionId, action: WebHookAction): Promise<object> {
    const database = new DatabaseService()
    const actionToDo = await database.findOneBy({ institutionId: institutionId.toNumber(), action: action.toString() })
    if (!actionToDo) throw new InfraNotFoundException('doNotExistsInstitutionIdOrAction')

    const webhook = new WebHook(
      new WebHookId(actionToDo.id),
      new WebHookInstitutionId(actionToDo.institutionId),
      new WebHookAction(actionToDo.action),
      new WebHookName(actionToDo.name),
      new WebHookMethod(actionToDo.method),
      new WebHookUrl(actionToDo.url),
      new WebHookSecret(actionToDo.secret),
      new WebHookTimeout(actionToDo.timeout),
      new WebHookStatus(actionToDo.status)
    )
    const httpService = new HttpService()
    const httpResponse = await httpService.call(webhook)

    return httpResponse
  }
}
