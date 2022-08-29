
import {
  WebHookAction,
  WebHookId, WebHookInstitutionId, WebHookMethod, WebHookName, WebHookSecret, WebHookStatus, WebHookTimeout, WebHookUrl
} from '@/domain/valueObjects'

export class WebHook {
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

  toJson (): object {
    return {
      id: this?.id?.toString(),
      institutionId: this.institutionId.toNumber(),
      action: this.action.toString(),
      name: this.name.toString(),
      method: this.method.toString(),
      url: this.url.toString(),
      secret: this.secret.toString(),
      timeout: this.timeout.toNumber(),
      status: this.status.toBoolean()
    }
  }
}
