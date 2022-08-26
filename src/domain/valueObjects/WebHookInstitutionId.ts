/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookInstitutionId {
  constructor (private readonly value: number) {
    if (!Number.isInteger(value)) throw new DomainException('InvalidWebhookInstitutionId')
  }

  toNumber (): number {
    return this.value
  }
}
