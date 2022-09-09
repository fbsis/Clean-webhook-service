import { InfraException } from '../exception'
import axios, { Method } from 'axios'
import { WebHook } from '@/domain/entities'
import { WebHookPayload } from '@/domain/valueObjects'

export class HttpService {
  async call (webhook: WebHook, payload: WebHookPayload): Promise<any> {
    try {
      const httpResponse = await axios.request({
        url: webhook.getUrl(),
        timeout: webhook.getTimeout() * 60,
        method: webhook.getMethod() as Method,
        data: payload
      })

      return httpResponse.data
    } catch (error: any) {
      if (error.message.includes('timeout')) {
        throw new InfraException('WebhookActionTimeoutException', error)
      }

      if (error.response.status === 404) {
        throw new InfraException('WebhookActionNotFoundException', error.message)
      }

      throw new InfraException('WebhookActionException', error)
    }
  }
}
