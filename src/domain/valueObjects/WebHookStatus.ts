import { DomainException } from '../exceptions'

export class WebHookStatus {
  constructor (private readonly value: boolean) {
    if (!value) throw new DomainException('InvalidWebhookStatus')
  }

  toBoolean (): boolean {
    return this.value
  }
}
