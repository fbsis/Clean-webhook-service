import { WebHook } from '@/domain/entities'
import { WebHookInstitutionId, WebHookAction } from '../valueObjects'

export interface IWebHookQueryRepository {
  getAll: () => Promise<WebHook[]>
  action: (institutionId: WebHookInstitutionId, action: WebHookAction) => Promise<object>

}
