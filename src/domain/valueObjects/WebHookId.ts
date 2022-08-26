export class WebHookId {
  constructor (private readonly value: number = 0) {}

  toNumber (): number {
    return this.value
  }
}
