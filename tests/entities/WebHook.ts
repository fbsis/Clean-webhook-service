import { WebHook } from '@/domain/entities'
import { WebHookId, WebHookInstitutionId, WebHookAction, WebHookName, WebHookMethod, WebHookUrl, WebHookSecret, WebHookTimeout, WebHookStatus } from '@/domain/valueObjects'

let method: WebHook

describe('WebHook Value object', () => {
  it('should not throw a error ', async () => {
    expect(() => {
      method = new WebHook(
        new WebHookId('123'),
        new WebHookInstitutionId(1),
        new WebHookAction('authentication.pre.sso'),
        new WebHookName('webhook name'),
        new WebHookMethod('get'),
        new WebHookUrl('http://google.com.br/webhook'),
        new WebHookSecret('secret key'),
        new WebHookTimeout(1),
        new WebHookStatus(true)
      )
      return method
    }
    ).not.toThrow()
  })

  it('should has a method to get the value', async () => {
    expect(method.toJson()).toMatchObject(
      {
        id: '123',
        institutionId: 1,
        action: 'authentication.pre.sso',
        name: 'webhook name',
        method: 'get',
        url: 'http://google.com.br/webhook',
        secret: 'secret key',
        timeout: 1,
        status: true
      }
    )
  })
})
