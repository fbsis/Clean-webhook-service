import { Controller } from '@/presentation/api/protocols'
import { RequestHandler, Router } from 'express'
import { IpAddressDiscovery } from './helpers'
import { WebHookCreateController } from '@/presentation/api/controllers'

export class ExpressRouter {
  readonly router: Router

  constructor (
    healthCheck: RequestHandler
  ) {
    this.router = Router()

    this.router.get('/v3/webhook/health', healthCheck)

    this.router.post('/v3/webhook', this.adaptController(new WebHookCreateController()))
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
