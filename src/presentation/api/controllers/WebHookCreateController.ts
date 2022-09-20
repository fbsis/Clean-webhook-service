import { WebHook } from '@/domain/entities'
import { WebHookId, WebHookAction, WebHookInstitutionId, WebHookMethod, WebHookName, WebHookSecret, WebHookStatus, WebHookTimeout, WebHookUrl } from '@/domain/valueObjects'
import { Controller } from '@/presentation/api/protocols'
import { HttpResponse } from '@/presentation/api/helpers'
import { WebhookCommandRepository } from '@/infra/repository'
import { CreateWebHookInteractor } from '@/domain/usecases'
import { LogService } from '@/infra/repository/LogService'

export class WebHookCreateController implements Controller {
  async handle (request: any): Promise<HttpResponse> {
    const id = new WebHookId('')
    const institutionId = new WebHookInstitutionId(request.institutionId)
    const action = new WebHookAction(request.action)
    const name = new WebHookName(request.name)
    const method = new WebHookMethod(request.method)
    const url = new WebHookUrl(request.url)
    const secret = new WebHookSecret(request.secret)
    const timeout = new WebHookTimeout(request.timeout)
    const status = new WebHookStatus(request.status)

    const webhook = new WebHook(
      id,
      institutionId,
      action,
      name,
      method,
      url,
      secret,
      timeout,
      status
    )

    const webHookCommandRepo = new WebhookCommandRepository()
    const createWebHookInteractor = new CreateWebHookInteractor(
      webHookCommandRepo
    )
    await createWebHookInteractor.execute(webhook)
    void LogService.entry('Create', request)

    return HttpResponse.created()
  }
}
