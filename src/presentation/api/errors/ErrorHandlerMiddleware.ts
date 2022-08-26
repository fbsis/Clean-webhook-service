import { Response } from 'express'
import { EnvAdapter } from '@/infra/configs/envs'
import { IpAddressDiscovery } from '@/presentation/api/helpers'
export default class ErrorHandlerMiddleware {
  handler (errorInfo: any, request: any, response: Response): void {
    try {
      const httpResponse = request.httpResponse
      let status = httpResponse?.statusCode || 500
      const stack = errorInfo.stack
      const message = errorInfo.message
      const ipAdress = IpAddressDiscovery.get(request)

      const isStaff = EnvAdapter.staffProxies.includes(ipAdress as string)

      if (stack.includes('DomainException')) status = 400

      let exceptionDetails = message.substr(0, 150)

      const exceptionDetailsForStaff = {
        dateTime: new Date(),
        exceptionMessage: message,
        exceptionTrace: stack,
        exceptionTraceDetails: errorInfo?.details
      }

      console.log(exceptionDetailsForStaff)

      if (isStaff) {
        exceptionDetails = exceptionDetailsForStaff
      }

      response
        .status(status)
        .send({
          status,
          body: exceptionDetails
        })
    } catch (error) {
      console.log(error)

      response
        .status(500).send({
          error: 'Something went wrong'
        })
    }
  }
}
