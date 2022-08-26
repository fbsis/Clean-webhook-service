/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookMethod {
  private readonly possibleValues = [
    'get',
    'post',
    'put',
    'delete'
  ]

  constructor (private readonly value: string) {
    if (!value) this.value = 'post'
    if (!this.isValid(this.value)) throw new DomainException('InvalidWebhookMethod')
  }

  isValid (value: string): boolean {
    if (!this.possibleValues.includes(value)) return false
    return true
  }

  toString (): string {
    return this.value
  }
}
