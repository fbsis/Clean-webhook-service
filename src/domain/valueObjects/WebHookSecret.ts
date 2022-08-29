import { DomainException } from '../exceptions'

export class WebHookSecret {
  constructor (private readonly value: string) {
    if (!value) this.value = ''
    if (!this.isValid()) throw new DomainException('InvalidSecret')
  }

  isValid (): boolean {
    if (this.value.length > 1024) return false
    return true
  }

  toString (): string {
    return this.value
  }
}
