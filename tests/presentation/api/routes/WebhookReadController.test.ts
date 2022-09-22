import { DatabaseService } from '@/infra/repository'
import { TestHelper } from '../../../TestHelper'
jest.setTimeout(15000)

jest.spyOn(DatabaseService.prototype, 'getAll').mockReturnValue(Promise.resolve(
  [{
    action: 'authentication.pre.sso',
    id: '9a1fe0bc019d631250da422a67ea8a69',
    institutionId: 1,
    method: 'post',
    name: 'name',
    secret: '',
    status: true,
    timeout: 15,
    url: 'http://www.ig.com.br/dfg'
  }]
))

describe('Webhook list Controller', () => {
  const testHelper = new TestHelper()
  const route = '/v3/webhook'

  beforeAll(async () => {
    await testHelper.startupServer()
  })

  afterAll(async () => {
    await testHelper.shutdownServer()
  })

  it('should return 200 on sucess with the values', async () => {
    const response = await testHelper.axiosAPIClient
      .get(route)
    expect(response.status).toBe(200)
    expect(response.data).toEqual({
      status: 200,
      body: [{
        action: 'authentication.pre.sso',
        id: '9a1fe0bc019d631250da422a67ea8a69',
        institutionId: 1,
        method: 'post',
        name: 'name',
        secret: '',
        status: true,
        timeout: 15,
        url: 'http://www.ig.com.br/dfg'
      }]
    })
  })
})
