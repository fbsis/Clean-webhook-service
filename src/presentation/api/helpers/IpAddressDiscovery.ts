import { Request } from 'express'

export class IpAddressDiscovery {
  static get (request: Request): string | string[] | undefined {
    return request.ip
  }
}
