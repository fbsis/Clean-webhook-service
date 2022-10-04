import { Controller } from '@/presentation/api/protocols'
import { HttpResponse } from '@/presentation/api/helpers'
import { WebHookAction, WebHookInstitutionId, WebHookPayload } from '@/domain/valueObjects'
import { WebhookQueryRepository } from '@/infra/repository/WebhookQueryRepository'
import { LogService } from '@/infra/repository/LogService'
import { TriggerWebhookActionInteractor } from '@/domain/usecases'

export class WebHookActionController implements Controller {
  async handle (request: any): Promise<HttpResponse> {
    const institutionId = new WebHookInstitutionId(request.institutionId)
    const action = new WebHookAction(request.action)
    const payload = new WebHookPayload(request.payload)

    const webHookQueryRepo = new WebhookQueryRepository()
    const actionWebHookInteractor = new TriggerWebhookActionInteractor(
      webHookQueryRepo
    )

    void LogService.entry('Action start', request)
    const response = await actionWebHookInteractor.execute(institutionId, action, payload)
    void LogService.entry('Action end', request)

    return HttpResponse.ok({ ...response })
  }
}
