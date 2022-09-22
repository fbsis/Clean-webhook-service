import { Controller } from '@/presentation/api/protocols'
import { RequestHandler, Router } from 'express'
import { IpAddressDiscovery } from './helpers'
import { WebHookActionController, WebHookCreateController, WebHookDeleteController, WebHookReadController, WebHookUpdateController } from '@/presentation/api/controllers'

export class ExpressRouter {
  readonly router: Router

  constructor (
    healthCheck: RequestHandler
  ) {
    this.router = Router()

    this.router.get('/v3/webhook/health', healthCheck)

    this.router.post('/v3/webhook', this.adaptController(new WebHookCreateController()))
    this.router.get('/v3/webhook', this.adaptController(new WebHookReadController()))
    this.router.put('/v3/webhook/:id', this.adaptController(new WebHookUpdateController()))
    this.router.delete('/v3/webhook/:id', this.adaptController(new WebHookDeleteController()))
    this.router.post('/v3/webhook/action', this.adaptController(new WebHookActionController()))
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
          userAgent: request.headers['user-agent'],
          http: {
            method: request.method,
            route: request.method
          }
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
