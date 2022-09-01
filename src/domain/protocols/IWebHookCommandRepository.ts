import { WebHook } from '@/domain/entities'
import { WebHookId } from '../valueObjects'

export interface IWebHookCommandRepository {
  create: (webhook: WebHook) => Promise<void>
  update: (webhook: WebHook) => Promise<void>
  delete: (id: WebHookId) => Promise<void>
}
