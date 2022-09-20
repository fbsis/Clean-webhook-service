import { WebHookId } from '../valueObjects'
import { iwebHook } from './IwebHook'

export interface IWebHookCommandRepository {
  create: (webhook: WebHookId) => Promise<void>
  update: (webhook: iwebHook) => Promise<void>
  delete: (id: WebHookId) => Promise<void>
}
