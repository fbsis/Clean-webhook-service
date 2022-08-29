import { DomainException } from '../exceptions'

export class WebHookTimeout {
  limitofTwoMinutes = 60 * 2
  defaultLimit = 15

  constructor (private readonly value: number) {
    if (!value) this.value = this.defaultLimit
    if (!Number.isInteger(this.value) || !this.isValid(this.value)) throw new DomainException('InvalidWebhookTimeout')
  }

  isValid (value: number): boolean {
    if ((value <= 0 || value >= this.limitofTwoMinutes)) return false
    return true
  }

  toNumber (): number {
    return this.value
  }
}
