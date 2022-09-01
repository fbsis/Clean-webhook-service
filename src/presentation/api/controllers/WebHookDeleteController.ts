import { Controller } from '@/presentation/api/protocols'
import { HttpResponse } from '@/presentation/api/helpers'
import { DeleteWebHookInteractor } from '@/domain/usecases'
import { WebHookId } from '@/domain/valueObjects'
import { WebhookCommandRepository } from '@/infra/repository'

export class WebHookDeleteController implements Controller {
  async handle (request: any): Promise<HttpResponse> {
    const id = new WebHookId(request.id)

    const webHookCommandRepo = new WebhookCommandRepository()
    const deleteWebHookInteractor = new DeleteWebHookInteractor(
      webHookCommandRepo
    )

    await deleteWebHookInteractor.execute(id)

    return HttpResponse.ok({})
  }
}
