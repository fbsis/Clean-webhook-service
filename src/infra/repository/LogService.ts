import { InfraException } from '../exception'
import axios from 'axios'
import { EnvAdapter } from '../configs/envs'

export class LogService {
  static async entry (action: string, content: string | any): Promise<any> {
    try {
      const actionToInput = action.replace(/\?.*$/, '')
      let contentToinput = content
      if (typeof content !== 'string') contentToinput = JSON.stringify(content)

      const httpResponse = await axios.request({
        url: EnvAdapter.logService,
        method: 'post',
        data: {
          action: actionToInput,
          content: contentToinput
        }
      })

      return httpResponse.data
    } catch (error: any) {
      throw new InfraException('LogServiceException', error)
    }
  }
}
