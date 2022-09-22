import { Controller } from '@/presentation/api/protocols'
import { HttpResponse } from '@/presentation/api/helpers'
import { DeleteWebHookInteractor } from '@/domain/usecases'
import { WebHookId } from '@/domain/valueObjects'
import { WebhookCommandRepository } from '@/infra/repository'
import { LogService } from '@/infra/repository/LogService'

export class WebHookDeleteController implements Controller {
  async handle (request: any): Promise<HttpResponse> {
    const id = new WebHookId(request.id)

    const webHookCommandRepo = new WebhookCommandRepository()
    const deleteWebHookInteractor = new DeleteWebHookInteractor(
      webHookCommandRepo
    )

    void LogService.entry('Delete', request)
    await deleteWebHookInteractor.execute(id)

    return HttpResponse.ok({})
  }
}
