import { WebHookId } from '../valueObjects'
import { IwebHook } from './IwebHook'

export interface IWebHookCommandRepository {
  create: (webhook: IwebHook) => Promise<void>
  update: (webhook: IwebHook) => Promise<void>
  delete: (id: WebHookId) => Promise<void>
}
