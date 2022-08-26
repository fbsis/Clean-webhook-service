import { Controller } from '@/presentation/api/protocols'
import { RequestHandler, Router } from 'express'
import { IpAddressDiscovery } from './helpers'

export class ExpressRouter {
  readonly router: Router

  constructor (
    healthCheck: RequestHandler
  ) {
    this.router = Router()
  }

  private readonly adaptController = (controller: Controller): RequestHandler => {
    return async (request, response, next) => {
      try {
        const httpRequest = {
          ...request.body,
          ...request.params,
          ...request.query,
          accessToken: request.headers.authorization,
          ipAddress: IpAddressDiscovery.get(request),
          userAgent: request.headers['user-agent']
        }
        const httpResponse = await controller.handle(httpRequest)
        response.status(httpResponse.statusCode).json({
          status: httpResponse.statusCode,
          body: httpResponse.data
        })
      } catch (error) {
        next(error)
      }
    }
  }
}
