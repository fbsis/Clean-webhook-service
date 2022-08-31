import { WebHook } from '@/domain/entities'

export interface IWebHookCommandRepository {
  create: (webhook: WebHook) => Promise<void>
  update: (webhook: WebHook) => Promise<void>
}
