/* eslint-disable no-unreachable */
import { DomainException } from '../exceptions'

export class LogAction {
  constructor (private readonly value: string) {
    if (!value || !this.isValid(value)) throw new DomainException('InvalidAction')
  }

  isValid (value: string): boolean {
    if (value !== '' && (value.length <= 5 || value.length >= 50)) return false
    return true
  }

  toString (): string {
    return this.value
  }
}
