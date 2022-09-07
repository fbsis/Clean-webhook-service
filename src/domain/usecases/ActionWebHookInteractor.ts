import { IWebHookQueryRepository } from '@/domain/protocols'
import { WebHookAction, WebHookInstitutionId } from '../valueObjects'

export class ActionWebHookInteractor {
  constructor (
    private readonly webhookQueryRepo: IWebHookQueryRepository
  ) {}

  async execute (institutionId: WebHookInstitutionId, action: WebHookAction): Promise<object> {
    return await this.webhookQueryRepo.action(institutionId, action)
  }
}
