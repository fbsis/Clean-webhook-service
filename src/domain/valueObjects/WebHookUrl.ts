/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class WebHookUrl {
  constructor (private readonly value: string) {
    if (!value || !this.isValid(value)) throw new DomainException('InvalidWebhookUrl')
  }

  isValid (value: string): boolean {
    const regExp =
      // eslint-disable-next-line no-useless-escape
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    const pattern = new RegExp(regExp)
    return pattern.test(value)
  }

  toString (): string {
    return this.value
  }
}
