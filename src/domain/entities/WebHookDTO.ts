
// passando registro de um lado para o outro
import {
  WebHookAction,
  WebHookId, WebHookInstitutionId, WebHookMethod, WebHookName, WebHookSecret, WebHookStatus, WebHookTimeout, WebHookUrl
} from '@/domain/valueObjects'
import { IwebHook } from '../protocols'

export class WebHookDTO implements IwebHook {
  constructor (
    private readonly id: WebHookId,
    private readonly institutionId: WebHookInstitutionId | undefined,
    private readonly action: WebHookAction | undefined,
    private readonly name: WebHookName | undefined,
    private readonly method: WebHookMethod | undefined,
    private readonly url: WebHookUrl | undefined,
    private readonly secret: WebHookSecret | undefined,
    private readonly timeout: WebHookTimeout | undefined,
    private readonly status: WebHookStatus | undefined

  ) {}

  toJson (): object {
    return {
      id: this?.id?.toString(),
      institutionId: this?.institutionId?.toNumber(),
      action: this?.action?.toString(),
      name: this?.name?.toString(),
      method: this?.method?.toString(),
      url: this?.url?.toString(),
      secret: this?.secret?.toString(),
      timeout: this?.timeout?.toNumber(),
      status: this?.status?.toBoolean()
    }
  }
}
