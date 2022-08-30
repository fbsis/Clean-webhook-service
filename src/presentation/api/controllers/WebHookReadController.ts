import { Controller } from '@/presentation/api/protocols'
import { HttpResponse } from '@/presentation/api/helpers'
import { ReadWebHookInteractor } from '@/domain/usecases'
import { WebhookQueryRepository } from '@/infra/repository/WebhookQueryRepository'

export class WebHookReadController implements Controller {
  async handle (_: any): Promise<HttpResponse> {
    const webHookQueryRepo = new WebhookQueryRepository()
    const createWebHookInteractor = new ReadWebHookInteractor(
      webHookQueryRepo
    )

    const webhook = await createWebHookInteractor.execute()

    return HttpResponse.ok({
      webhook: webhook.map(webhook => webhook.toJson())
    })
  }
}
