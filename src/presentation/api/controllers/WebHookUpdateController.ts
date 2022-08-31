import { Controller } from '@/presentation/api/protocols'
import { HttpResponse } from '@/presentation/api/helpers'
import { UpdateWebHookInteractor } from '@/domain/usecases'
import { WebHookAction, WebHookId, WebHookInstitutionId, WebHookMethod, WebHookName, WebHookSecret, WebHookStatus, WebHookTimeout, WebHookUrl } from '@/domain/valueObjects'
import { WebHook } from '@/domain/entities'
import { WebhookCommandRepository } from '@/infra/repository'

export class WebHookUpdateController implements Controller {
  async handle (request: any): Promise<HttpResponse> {
    const id = new WebHookId(request.id)
    let institutionId: WebHookInstitutionId | undefined
    let action: WebHookAction | undefined
    let name: WebHookName | undefined
    let method: WebHookMethod | undefined
    let url: WebHookUrl | undefined
    let secret: WebHookSecret | undefined
    let timeout: WebHookTimeout | undefined
    let status: WebHookStatus | undefined

    if (request.institutionId) institutionId = new WebHookInstitutionId(request.institutionId)
    if (request.action) action = new WebHookAction(request.action)
    if (request.name) name = new WebHookName(request.name)
    if (request.method) method = new WebHookMethod(request.method)
    if (request.url) url = new WebHookUrl(request.url)
    if (request.secret) secret = new WebHookSecret(request.secret)
    if (request.timeout) timeout = new WebHookTimeout(request.timeout)
    if (request.status) status = new WebHookStatus(request.status)

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
    const updateWebHookInteractor = new UpdateWebHookInteractor(
      webHookCommandRepo
    )

    await updateWebHookInteractor.execute(webhook)

    return HttpResponse.ok({})
  }
}
