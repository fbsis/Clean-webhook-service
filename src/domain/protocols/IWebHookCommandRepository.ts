import { WebHookId } from '../valueObjects'
import { iwebHook } from './iwebHook'

export interface IWebHookCommandRepository {
  create: (webhook: iwebHook) => Promise<void>
  update: (webhook: iwebHook) => Promise<void>
  delete: (id: WebHookId) => Promise<void>
}
