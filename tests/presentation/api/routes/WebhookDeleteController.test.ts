import { DatabaseService } from '@/infra/repository'
import { TestHelper } from '../../../TestHelper'
jest.setTimeout(15000)

jest.spyOn(DatabaseService.prototype, 'delete').mockReturnValue(Promise.resolve())

describe('Webhook delete Controller', () => {
  const testHelper = new TestHelper()
  const route = '/v3/webhook/701d446bb0211bb9d9c5cc240c50ebef'

  beforeAll(async () => {
    await testHelper.startupServer()
  })

  afterAll(async () => {
    await testHelper.shutdownServer()
  })

  it('should return 200 on sucess with the values', async () => {
    const response = await testHelper.axiosAPIClient
      .delete(route)
    expect(response.status).toBe(200)
    expect(response.data).toEqual({
      status: 200,
      body: {}

    })
  })
})
