import { WebHook } from '@/domain/entities'

export interface IWebHookQueryRepository {
  getAll: () => Promise<WebHook[]>
}
