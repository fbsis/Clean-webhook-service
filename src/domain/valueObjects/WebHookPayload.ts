/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookPayload {
  constructor (private readonly value: object) {
    if (!value || !this.isValid(value)) throw new DomainException('InvalidWebhookPayload')
  }

  isValid (value: object): boolean {
    if (typeof value !== 'object') return false
    if (JSON.stringify(value).length > 496) return false
    return true
  }

  toString (): object {
    return this.value
  }
}
