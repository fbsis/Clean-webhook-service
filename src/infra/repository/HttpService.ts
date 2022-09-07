
import 'reflect-metadata'
import { InfraException } from '../exception'
import axios, { Method } from 'axios'
import { WebHook } from '@/domain/entities'

export class HttpService {
  async call (webhook: WebHook): Promise<any> {
    try {
      const httpResponse = await axios.request({
        url: webhook.getUrl(),
        timeout: webhook.getTimeout() * 60,
        method: webhook.getMethod() as Method
      })

      return httpResponse.data
    } catch (error: any) {
      if (error.message.includes('timeout')) {
        throw new InfraException('HttpServiceTimeoutConfigureException', error)
      }

      if (error.response.status === 404) {
        throw new InfraException('HttpServiceResponseUnavailableException', error.message)
      }

      throw new InfraException('HttpServiceException', error)
    }
  }
}
