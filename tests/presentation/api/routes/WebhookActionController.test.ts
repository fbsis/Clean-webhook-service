import { DatabaseService, HttpService } from '@/infra/repository'
import { TestHelper } from '../../../TestHelper'
jest.setTimeout(15000)

jest.spyOn(DatabaseService.prototype, 'findOneBy').mockReturnValue(Promise.resolve(
  {
    action: 'authentication.pre.sso',
    id: '9a1fe0bc019d631250da422a67ea8a69',
    institutionId: 1,
    method: 'post',
    name: 'name',
    secret: '',
    status: true,
    timeout: 15,
    url: 'http://www.ig.com.br/dfg'
  }
))

const testHelper = new TestHelper()
const route = '/v3/webhook/action'

beforeAll(async () => {
  await testHelper.startupServer()
})

afterAll(async () => {
  await testHelper.shutdownServer()
})

describe('Webhook action Controller', () => {
  jest.spyOn(HttpService.prototype, 'call').mockReturnValue(Promise.resolve(
    {
      fakeKey: 'fakeResult'
    }
  ))

  it('should return 200 on sucess with the values', async () => {
    const response = await testHelper.axiosAPIClient
      .post(route, {
        institutionId: 1,
        action: 'authentication.pre.sso',
        payload: {
          teste: 'teste2'
        }
      })
    expect(response.status).toBe(200)
    expect(response.data).toEqual({
      status: 200,
      body: {
        fakeKey: 'fakeResult'
      }

    })
  })
})
