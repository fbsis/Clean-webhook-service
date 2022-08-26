import { DomainException } from '../exceptions'

export class WebHookSecret {
  constructor (private readonly value: string) {
    if (!value || !this.isValid(value)) throw new DomainException('InvalidWebhookSecret')
  }

  isValid (value: string): boolean {
    if (value !== '' && (value.length <= 10 || value.length >= 50)) return false
    return true
  }

  toString (): string {
    return this.value
  }
}
