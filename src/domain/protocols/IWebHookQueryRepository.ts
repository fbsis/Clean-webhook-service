import { WebHook } from '@/domain/entities'
import { WebHookInstitutionId, WebHookAction, WebHookPayload } from '../valueObjects'

export interface IWebHookQueryRepository {
  getAll: () => Promise<WebHook[]>
  action: (institutionId: WebHookInstitutionId, action: WebHookAction, payload: WebHookPayload) => Promise<object>

}
