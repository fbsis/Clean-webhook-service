
import {
  WebHookAction,
  WebHookId, WebHookInstitutionId, WebHookMethod, WebHookName, WebHookSecret, WebHookStatus, WebHookTimeout, WebHookUrl
} from '@/domain/valueObjects'
import { IwebHook } from '../protocols'

export class WebHook implements IwebHook {
  constructor (
    private readonly id: WebHookId,
    private readonly institutionId: WebHookInstitutionId,
    private readonly action: WebHookAction,
    private readonly name: WebHookName,
    private readonly method: WebHookMethod,
    private readonly url: WebHookUrl,
    private readonly secret: WebHookSecret,
    private readonly timeout: WebHookTimeout,
    private readonly status: WebHookStatus

  ) {}

  getUrl (): string {
    return this.url.toString()
  }

  getAction (): string {
    return this.action.toString()
  }

  getMethod (): string {
    return this.method.toString()
  }

  getSecret (): string {
    return this.secret.toString()
  }

  getTimeout (): number {
    return this.timeout.toNumber()
  }

  toJson (): object {
    return {
      id: this.id.toString(),
      institutionId: this.institutionId.toNumber(),
      action: this.action.toString(),
      name: this.name.toString(),
      method: this.method.toString(),
      url: this.url.toString(),
      secret: this.secret.toString(),
      timeout: this.timeout.toNumber(),
      status: this.status?.toBoolean()
    }
  }
}
