import { DomainException } from '../exceptions'

export class WebHookTimeout {
  limitofTwoMinutes = 60 * 2;

  constructor (private readonly value: number) {
    if (!Number.isInteger(value) || !this.isValid(value)) throw new DomainException('InvalidWebhookTimeout')
  }

  isValid (value: number): boolean {
    if ((value <= 0 || value >= this.limitofTwoMinutes)) return false
    return true
  }

  toNumber (): number {
    return this.value
  }
}
