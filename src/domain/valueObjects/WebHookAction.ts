/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookAction {
  private readonly possibleValues = [
    'authentication.pre.sso',
    'authentication.post.sso',
    'authentication.pre.otp',
    'authentication.post.token',
    'authentication.pre.token',
    'authentication.post.token',
    'authentication.failed.login'
  ]

  constructor (private readonly value: string) {
    if (!value) this.value = ''
    if (!this.isValid()) throw new DomainException('InvalidWebhookAction')
  }

  isValid (): boolean {
    if (!this.possibleValues.find(e => this.value)) return false
    return true
  }

  toString (): string {
    return this.value
  }
}
