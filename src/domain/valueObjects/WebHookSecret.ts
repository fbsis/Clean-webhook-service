import { DomainException } from '../exceptions'

export class WebHookSecret {
  constructor (private readonly value: string) {
    if (!value) this.value = ''
    if (!this.isValid(value)) throw new DomainException('InvalidWebhookSecret')
  }

  isValid (value: string): boolean {
    if (value === '' || value === undefined) return true
    if (value.length <= 5 || value.length >= 50) return false
    return true
  }

  toString (): string {
    return this.value
  }
}
