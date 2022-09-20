import { DomainException } from '../exceptions'

export class WebHookId {
  constructor (private readonly value: string) {
    if (value === '') return
    if (!value || !this.isValid(value)) throw new DomainException('InvalidWebhookId')
  }

  toString (): string {
    return this.value
  }

  isValid (value: string): boolean {
    const regExp = /^[a-f0-9]{32}$/g
    const pattern = new RegExp(regExp)
    return pattern.test(value)
  }
}
