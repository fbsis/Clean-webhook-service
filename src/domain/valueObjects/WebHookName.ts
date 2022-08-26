/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookName {
  constructor (private readonly value: string) {
    if (!value || !this.isValid(value)) throw new DomainException('InvalidWebhookName')
  }

  isValid (value: string): boolean {
    if (value !== '' && (value.length <= 3 || value.length >= 50)) return false
    return true
  }

  toString (): string {
    return this.value
  }
}
