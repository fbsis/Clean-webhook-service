import { DatabaseService } from '@/infra/repository'
import { TestHelper } from '../../../TestHelper'
jest.setTimeout(15000)

jest.spyOn(DatabaseService.prototype, 'create').mockReturnValue(Promise.resolve())

describe('Webhook create Controller', () => {
  const testHelper = new TestHelper()
  const route = '/v3/webhook'

  beforeAll(async () => {
    await testHelper.startupServer()
  })

  afterAll(async () => {
    await testHelper.shutdownServer()
  })

  it('should return 400 on missing params', async () => {
    const response = await testHelper.axiosAPIClient
      .post(route)
    expect(response.status).toBe(400)
    expect(response.data).toEqual({
      status: 400,
      body: 'InvalidInstitutionId'
    })
  })

  it('should return 201 on success', async () => {
    const response = await testHelper.axiosAPIClient
      .post(route,
        {
          institutionId: 1,
          action: 'authentication.pre.sso',
          name: 'name',
          url: 'http://www.ig.com.br/dfg',
          status: true
        })
    expect(response.status).toBe(201)
    expect(response.data).toEqual({
      status: 201,
      body: {}
    })
  })
})
