/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookPayload {
  constructor (private readonly value: object) {
    if (!value && value === undefined && !this.isValid(value)) throw new DomainException('InvalidWebhookAction')
  }

  isValid (value: object): boolean {
    if (JSON.stringify(value).length > 496) return false
    return true
  }

  toString (): object {
    return this.value
  }
}
