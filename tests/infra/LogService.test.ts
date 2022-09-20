import { DatabaseService } from '@/infra/repository'
import { LogService } from '@/infra/repository/LogService'
jest.setTimeout(15000)

const webhookData = {
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
jest.mock('@/infra/repository/LogService')
const mockStaticF = jest.fn().mockReturnValue('worked')
LogService.entry = mockStaticF

describe('database list webhook', () => {
  it('should return all webhooks registered', async () => {
    const database = new DatabaseService()
    const getAll = await database.getAll()
    expect(getAll).toEqual(
      [webhookData]
    )
  })
})
