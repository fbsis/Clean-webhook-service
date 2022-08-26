/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookInstitutionId {
  constructor (private readonly value: number) {
    if (!value) throw new DomainException('InvalidWebhookInstitutionId')
  }

  toNumber (): number {
    return this.value
  }
}
